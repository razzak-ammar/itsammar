export type AvailabilityEvent = {
  id: string;
  title: string;
  category: string;
  start: string;
  end: string;
  allDay?: boolean;
};

type GoogleCalendarEvent = {
  id: string;
  summary?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  status?: string;
  transparency?: "opaque" | "transparent";
};

type GoogleCalendarResponse = { items?: GoogleCalendarEvent[] };

const demoEvents: AvailabilityEvent[] = [
  { id: "demo-1", title: "Open for conversations", category: "free", start: "2026-08-22T10:00:00-04:00", end: "2026-08-22T12:00:00-04:00" },
  { id: "demo-2", title: "Deep work", category: "busy", start: "2026-08-22T14:00:00-04:00", end: "2026-08-22T17:00:00-04:00" },
  { id: "demo-3", title: "Project time", category: "busy", start: "2026-08-23T09:00:00-04:00", end: "2026-08-23T11:30:00-04:00" },
  { id: "demo-4", title: "Available", category: "free", start: "2026-08-23T13:00:00-04:00", end: "2026-08-23T16:00:00-04:00" },
  { id: "demo-5", title: "Taking a breather", category: "busy", start: "2026-08-24T12:00:00-04:00", end: "2026-08-24T13:00:00-04:00" },
  { id: "demo-6", title: "Available", category: "free", start: "2026-08-24T15:00:00-04:00", end: "2026-08-24T17:30:00-04:00" },
];

const FREE_TAGS = new Set(["free", "available", "availability", "open"]);
const BUSY_TAGS = new Set(["busy", "meeting", "call", "focus", "unavailable"]);

export function parseAvailabilitySummary(summary: string | undefined, transparency?: "opaque" | "transparent") {
  const original = summary?.trim() || "Unavailable";
  const tags = [...original.matchAll(/\[([^\]]+)\]/g)].map((match) => match[1].trim().toLowerCase()).filter(Boolean);
  const title = original.replace(/\s*\[[^\]]+\]\s*/g, " ").replace(/\s{2,}/g, " ").trim() || "Unavailable";
  const explicitFree = tags.find((tag) => FREE_TAGS.has(tag));
  const explicitBusy = tags.find((tag) => BUSY_TAGS.has(tag));

  let category = explicitFree ? "free" : explicitBusy ? "busy" : tags[0];
  if (!category) {
    if (/\b(free|available|availability|open|office hours)\b/i.test(title) || transparency === "transparent") category = "free";
    else if (/\b(meeting|call|busy|unavailable|focus|deep work|project|appointment|interview|break|breather)\b/i.test(title)) category = "busy";
    else category = "busy";
  }

  return { title, category };
}

export async function getAvailability(): Promise<AvailabilityEvent[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) return demoEvents;

  const rangeStart = new Date();
  rangeStart.setHours(0, 0, 0, 0);
  const rangeEnd = new Date(rangeStart.getTime() + 35 * 24 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    key: apiKey,
    singleEvents: "true",
    orderBy: "startTime",
    timeMin: rangeStart.toISOString(),
    timeMax: rangeEnd.toISOString(),
    maxResults: "100",
  });

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`,
    { next: { revalidate: 300 } },
  );

  if (!response.ok) throw new Error("Availability is temporarily unavailable.");

  const data = (await response.json()) as GoogleCalendarResponse;
  return (data.items ?? [])
    .filter((event) => event.status !== "cancelled" && (event.start?.dateTime || event.start?.date))
    .map((event) => {
      const parsed = parseAvailabilitySummary(event.summary, event.transparency);
      return {
        id: event.id,
        // Bracket labels classify the event but are never exposed to visitors.
        title: parsed.title,
        category: parsed.category,
        start: event.start?.dateTime || event.start?.date || "",
        end: event.end?.dateTime || event.end?.date || event.start?.dateTime || event.start?.date || "",
        allDay: Boolean(event.start?.date),
      };
    });
}
