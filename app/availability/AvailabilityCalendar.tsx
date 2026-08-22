"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { AvailabilityEvent } from "@/lib/availability";

const DAY = 24 * 60 * 60 * 1000;
type CalendarView = "day" | "twoDay" | "threeDay" | "week" | "month";

const DESKTOP_VIEWS: { value: CalendarView; label: string }[] = [
  { value: "day", label: "Day" }, { value: "threeDay", label: "3 days" },
  { value: "week", label: "Week" }, { value: "month", label: "Month" },
];
const MOBILE_VIEWS: { value: CalendarView; label: string }[] = [
  { value: "day", label: "Day" }, { value: "twoDay", label: "2 days" }, { value: "month", label: "Month" },
];

function startOfDay(value: Date) { return new Date(value.getFullYear(), value.getMonth(), value.getDate()); }
function startOfMonth(value: Date) { return new Date(value.getFullYear(), value.getMonth(), 1); }
function isSameDay(left: Date, right: Date) { return startOfDay(left).getTime() === startOfDay(right).getTime(); }
function addMonths(value: Date, amount: number) { return new Date(value.getFullYear(), value.getMonth() + amount, 1); }
function formatTime(date: Date) { return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date); }
function viewLength(view: CalendarView) { return view === "twoDay" ? 2 : view === "threeDay" ? 3 : view === "week" ? 7 : 1; }

const EVENT_PALETTE = [
  { color: "#a78bfa", background: "rgba(167, 139, 250, .13)", text: "#ddd6fe" },
  { color: "#38bdf8", background: "rgba(56, 189, 248, .13)", text: "#bae6fd" },
  { color: "#f59e0b", background: "rgba(245, 158, 11, .13)", text: "#fde68a" },
  { color: "#a3e635", background: "rgba(163, 230, 53, .11)", text: "#d9f99d" },
];

function eventStyle(category: string): CSSProperties {
  const categoryHash = [...category].reduce((hash, letter) => ((hash << 5) - hash + letter.charCodeAt(0)) | 0, 0);
  const known = category === "free"
    ? { color: "#2dd4bf", background: "rgba(45, 212, 191, .12)", text: "#99f6e4" }
    : category === "busy"
      ? { color: "#fb7185", background: "rgba(251, 113, 133, .12)", text: "#fecdd3" }
      : EVENT_PALETTE[Math.abs(categoryHash) % EVENT_PALETTE.length];
  return { borderColor: known.color, background: known.background, color: known.text, "--event-text": known.text } as CSSProperties;
}

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export default function AvailabilityCalendar({ events, isDemo, isUnavailable }: { events: AvailabilityEvent[]; isDemo: boolean; isUnavailable: boolean }) {
  const [anchor, setAnchor] = useState(() => startOfDay(new Date()));
  const [view, setView] = useState<CalendarView>("threeDay");
  const isMobile = useMobile();
  const activeView = isMobile && (view === "threeDay" || view === "week") ? "day" : view;
  const availableViews = isMobile ? MOBILE_VIEWS : DESKTOP_VIEWS;
  const dayCount = viewLength(activeView);
  const today = startOfDay(new Date());
  const days = useMemo(() => Array.from({ length: dayCount }, (_, index) => new Date(anchor.getTime() + index * DAY)), [anchor, dayCount]);
  const visibleEvents = useMemo(() => events.filter((event) => {
    const start = new Date(event.start).getTime();
    return start >= anchor.getTime() && start < anchor.getTime() + dayCount * DAY;
  }), [anchor, dayCount, events]);
  const monthDays = useMemo(() => {
    const first = startOfMonth(anchor);
    const gridStart = new Date(first.getTime() - first.getDay() * DAY);
    return Array.from({ length: 42 }, (_, index) => new Date(gridStart.getTime() + index * DAY));
  }, [anchor]);

  const move = (direction: -1 | 1) => activeView === "month"
    ? setAnchor((day) => addMonths(day, direction))
    : setAnchor((day) => new Date(day.getTime() + direction * dayCount * DAY));
  const selectView = (nextView: CalendarView) => {
    setView(nextView);
    if (nextView === "month") setAnchor((day) => startOfMonth(day));
  };
  const todayIsVisible = activeView === "month"
    ? anchor.getMonth() === today.getMonth() && anchor.getFullYear() === today.getFullYear()
    : today.getTime() >= anchor.getTime() && today.getTime() < anchor.getTime() + dayCount * DAY;
  const goToToday = () => setAnchor(activeView === "month" ? startOfMonth(today) : today);
  const dateLabel = activeView === "month"
    ? anchor.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : dayCount === 1
      ? anchor.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : `${anchor.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${days.at(-1)?.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

  return (
    <section className="availability-enter flex min-h-[700px] flex-1 flex-col pb-1 pt-5 sm:min-h-[760px] sm:pb-0 sm:pt-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <h1 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">Availability</h1>
          {isDemo && <span className="border border-amber-300/20 px-1.5 py-0.5 font-mono text-[8px] tracking-[0.15em] text-amber-200/70">DEMO</span>}
          {isUnavailable && <span className="border border-amber-300/20 px-1.5 py-0.5 font-mono text-[8px] tracking-[0.15em] text-amber-200/70">TEMPORARILY UNAVAILABLE</span>}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="calendar-view-switcher" aria-label="Calendar view">
            {availableViews.map((option) => <button key={option.value} type="button" onClick={() => selectView(option.value)} className={activeView === option.value ? "is-active" : ""} aria-pressed={activeView === option.value}>{option.label}</button>)}
          </div>
        </div>
      </div>

      <div className="calendar-shell flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-14 items-center justify-between gap-3 border-b border-white/[0.07] px-2 sm:px-4">
          <button onClick={() => move(-1)} className="calendar-control" aria-label={`Previous ${activeView}`}><ChevronLeft size={17} /></button>
          <div className="flex min-w-0 items-center justify-center gap-2">
            <p className="truncate text-center text-xs font-medium text-gray-300 sm:text-sm">{dateLabel}</p>
            <button type="button" onClick={goToToday} disabled={todayIsVisible} className="calendar-today-button">Today</button>
          </div>
          <button onClick={() => move(1)} className="calendar-control" aria-label={`Next ${activeView}`}><ChevronRight size={17} /></button>
        </div>
        {activeView === "month" ? <MonthView days={monthDays} anchor={anchor} events={events} today={today} /> : <TimeGrid days={days} events={visibleEvents} anchor={anchor} today={today} />}
      </div>
    </section>
  );
}

function TimeGrid({ days, events, anchor, today }: { days: Date[]; events: AvailabilityEvent[]; anchor: Date; today: Date }) {
  const columns = `52px repeat(${days.length}, minmax(0, 1fr))`;
  const timedEvents = events.filter((event) => !event.allDay);
  const startHour = timedEvents.reduce((earliest, event) => {
    const start = new Date(event.start);
    return Math.max(0, Math.min(earliest, Math.floor(start.getHours() + start.getMinutes() / 60)));
  }, 9);
  const endHour = timedEvents.reduce((latest, event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const eventEnd = isSameDay(start, end) ? end.getHours() + end.getMinutes() / 60 : 24;
    return Math.min(24, Math.max(latest, Math.ceil(eventEnd)));
  }, 19);
  const hours = Array.from({ length: Math.max(1, endHour - startHour) }, (_, index) => startHour + index);
  const hourSpan = hours.length;
  const rowHeight = `${100 / hourSpan}%`;
  const minimumGridHeight = Math.max(520, hourSpan * 44);

  return (
    <div className="calendar-time-view flex min-h-0 flex-1 flex-col overflow-x-hidden">
      <div className="grid border-b border-white/[0.07]" style={{ gridTemplateColumns: columns }}>
        <div />
        {days.map((day) => { const isToday = isSameDay(day, today); return <div key={day.toISOString()} className={`border-l border-white/[0.07] px-2 py-3 text-center sm:px-4 sm:py-4 ${isToday ? "bg-teal-400/[0.035]" : ""}`}><p className={`font-mono text-[9px] tracking-[0.16em] ${isToday ? "text-teal-400" : "text-gray-500"}`}>{day.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()}</p><p className={`mx-auto mt-0.5 grid h-7 w-7 place-items-center text-lg font-medium sm:text-xl ${isToday ? "rounded-full bg-teal-400 text-gray-950" : "text-gray-100"}`}>{day.getDate()}</p></div>; })}
      </div>
      <div className="calendar-time-body relative grid flex-1" style={{ gridTemplateColumns: columns, minHeight: `${minimumGridHeight}px` }}>
        <div>{hours.map((hour) => <div key={hour} className="calendar-hour-row border-b border-white/[0.045] pr-2 pt-2 text-right font-mono text-[8px] text-gray-600 sm:text-[9px]" style={{ height: rowHeight }}>{formatTime(new Date(2026, 0, 1, hour))}</div>)}</div>
        {days.map((day) => <div key={day.toISOString()} className={`relative border-l border-white/[0.07] ${isSameDay(day, today) ? "bg-teal-400/[0.025]" : ""}`}>{hours.map((hour) => <div key={hour} className="calendar-hour-row border-b border-white/[0.045]" style={{ height: rowHeight }} />)}</div>)}
        {events.map((event) => {
          const start = new Date(event.start); const end = new Date(event.end);
          const dayIndex = Math.floor((startOfDay(start).getTime() - anchor.getTime()) / DAY);
          const startTime = start.getHours() + start.getMinutes() / 60;
          const displayedEnd = isSameDay(start, end) ? end.getHours() + end.getMinutes() / 60 : 24;
          const topHours = event.allDay ? 0 : Math.max(0, startTime - startHour);
          const duration = event.allDay ? 0.6 : Math.max(0.6, displayedEnd - startTime);
          return <div key={event.id} className="calendar-event" style={{ ...eventStyle(event.category), left: `calc(52px + ${dayIndex} * (100% - 52px) / ${days.length} + 4px)`, width: `calc((100% - 52px) / ${days.length} - 8px)`, top: `${(topHours / hourSpan) * 100}%`, height: `${(duration / hourSpan) * 100}%` }}><strong>{event.title}</strong><span>{event.allDay ? "All day" : `${formatTime(start)} – ${formatTime(end)}`}</span></div>;
        })}
      </div>
    </div>
  );
}

function MonthView({ days, anchor, events, today }: { days: Date[]; anchor: Date; events: AvailabilityEvent[]; today: Date }) {
  return <div className="calendar-month-view flex min-h-0 flex-1 flex-col">
    <div className="grid grid-cols-7 border-b border-white/[0.07]">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <div key={`${day}-${index}`} className="py-2 text-center font-mono text-[9px] text-gray-600 sm:py-3 sm:text-[10px]">{day}</div>)}</div>
    <div className="calendar-month-grid grid min-h-[520px] flex-1 grid-cols-7 grid-rows-6 sm:min-h-[560px]">{days.map((day) => {
      const dayEvents = events.filter((event) => startOfDay(new Date(event.start)).getTime() === day.getTime());
      const isCurrentMonth = day.getMonth() === anchor.getMonth();
      const isToday = isSameDay(day, today);
      return <div key={day.toISOString()} className={`overflow-hidden border-b border-r border-white/[0.055] p-1.5 sm:p-2.5 ${isToday ? "bg-teal-400/[0.035]" : ""}`}><span className={`inline-grid h-5 w-5 place-items-center text-[10px] sm:text-xs ${isToday ? "rounded-full bg-teal-400 font-semibold text-gray-950" : isCurrentMonth ? "text-gray-300" : "text-gray-700"}`}>{day.getDate()}</span><div className="mt-1 space-y-1">{dayEvents.slice(0, 2).map((event) => <div key={event.id} className="truncate border-l px-1 py-0.5 text-[7px] sm:px-1.5 sm:text-[10px]" style={eventStyle(event.category)}>{event.title}</div>)}{dayEvents.length > 2 && <p className="pl-1 text-[7px] text-gray-500 sm:text-[9px]">+{dayEvents.length - 2}</p>}</div></div>;
    })}</div>
  </div>;
}
