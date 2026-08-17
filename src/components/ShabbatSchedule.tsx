import { useEffect, useState } from "react";
import content from "../../public/data/content.json";

interface ShabbatDates {
  friday: Date;
  saturday: Date;
  formatted: string;
}

interface TimetableItem {
  event: string;
  time: string;
}

interface ShabbatSchedule {
  fridayEvening: {
    timetable: TimetableItem[];
  };
  shabbosDay: {
    timetable: TimetableItem[];
  };
}

export default function ShabbatSchedule() {
  const [shabbatDates, setShabbatDates] = useState<ShabbatDates | null>(null);

  useEffect(() => {
    const getShabbatDates = () => {
      const today = new Date();
      const currentDay = today.getDay();
      const daysUntilFriday = (5 - currentDay + 7) % 7;
      const daysUntilSaturday = (6 - currentDay + 7) % 7;

      const friday = new Date(today);
      friday.setDate(today.getDate() + daysUntilFriday);

      const saturday = new Date(today);
      saturday.setDate(today.getDate() + daysUntilSaturday);

      const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      };

      return {
        friday,
        saturday,
        formatted: `${formatDate(friday)} - ${formatDate(
          saturday
        )}, ${friday.getFullYear()}`,
      };
    };

    setShabbatDates(getShabbatDates());
  }, []);

  if (!shabbatDates) {
    return (
      <div className="min-h-96 border-t-4 border-[#B48A45] bg-[#10263B] p-7 text-white shadow-xl sm:p-8">
        <p className="text-white/70">Loading schedule...</p>
      </div>
    );
  }

  const schedule = content.home.shabbatSchedule as ShabbatSchedule;

  return (
    <div className="h-full border-t-4 border-[#B48A45] bg-[#10263B] p-7 text-white shadow-xl sm:p-8">
      <div className="mb-7 flex flex-col gap-2 border-b border-[#B48A45]/45 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold italic">Shabbat Schedule</h2>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D8B979]">{shabbatDates.formatted}</p>
      </div>
      <div className="space-y-9">
        <div>
          <h3 className="mb-1 text-lg font-bold uppercase tracking-[0.14em] text-[#D8B979]">
            Friday Evening
          </h3>
          <p className="mb-3 text-sm text-white/55">
            {shabbatDates.friday.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="grid text-sm">
            {schedule.fridayEvening.timetable.map((item, index) => (
              <div key={index} className="flex items-start justify-between gap-5 border-b border-white/10 py-2.5 last:border-b-0">
                <span className="text-white/75">{item.event}</span>
                <span className="shrink-0 font-bold tabular-nums">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-1 text-lg font-bold uppercase tracking-[0.14em] text-[#D8B979]">
            Shabbos Day
          </h3>
          <p className="mb-3 text-sm text-white/55">
            {shabbatDates.saturday.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="grid text-sm">
            {schedule.shabbosDay.timetable.map((item, index) => (
              <div key={index} className="flex items-start justify-between gap-5 border-b border-white/10 py-2.5 last:border-b-0">
                <span className="text-white/75">{item.event}</span>
                <span className="shrink-0 font-bold tabular-nums">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
