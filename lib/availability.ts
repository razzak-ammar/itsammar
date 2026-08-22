export type AvailabilityEvent = {
  id: string;
  title: string;
  category: string;
  start: string;
  end: string;
  allDay?: boolean;
};

export type AvailabilityResult = {
  events: AvailabilityEvent[];
  isDemo: boolean;
  isUnavailable: boolean;
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
const BUSY_TAGS = new Set([
  "busy", "class", "lecture", "lab", "meeting", "call", "focus", "work", "appointment", "interview", "travel", "unavailable",
]);
const FREE_KEYWORDS = /\b(free|available|availability|open|office hours)\b/i;
const BUSY_KEYWORDS = /\b(class|lecture|lab|meeting|call|busy|unavailable|focus|deep work|project|appointment|interview|break|breather|work|travel)\b/i;

export function parseAvailabilitySummary(summary: string | undefined, transparency?: "opaque" | "transparent") {
  const original = summary?.trim() || "Unavailable";
  const tags = [...original.matchAll(/\[([^\]]+)\]/g)].map((match) => match[1].trim().toLowerCase()).filter(Boolean);
  const title = original.replace(/\s*\[[^\]]+\]\s*/g, " ").replace(/\s{2,}/g, " ").trim() || "Unavailable";
  // A bracket label is an intentional override. It is removed from the displayed title.
  const taggedCategory = tags.find((tag) => FREE_TAGS.has(tag) || BUSY_TAGS.has(tag));
  const category = taggedCategory
    ? FREE_TAGS.has(taggedCategory) ? "free" : "busy"
    : FREE_KEYWORDS.test(title)
      ? "free"
      : BUSY_KEYWORDS.test(title)
        ? "busy"
        : transparency === "transparent" ? "free" : "general";

  return { title, category };
}

export async function getAvailability(): Promise<AvailabilityResult> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

  if (!calendarId || !apiKey) {
    return { events: demoEvents, isDemo: true, isUnavailable: false };
  }

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

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      const responseBody = await response.json().catch(() => null) as {
        error?: { message?: string; errors?: Array<{ reason?: string }> };
      } | null;
      console.error("Google Calendar availability request failed.", {
        status: response.status,
        reason: responseBody?.error?.errors?.[0]?.reason,
        message: responseBody?.error?.message,
      });
      return { events: [], isDemo: false, isUnavailable: true };
    }

    const data = (await response.json()) as GoogleCalendarResponse;
    const events = (data.items ?? [])
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

    return { events, isDemo: false, isUnavailable: false };
  } catch (error) {
    console.error("Google Calendar availability request failed.", error);
    return { events: [], isDemo: false, isUnavailable: true };
  }
}
