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
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Loading schedule...</p>
      </div>
    );
  }

  const schedule = content.home.shabbatSchedule as ShabbatSchedule;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-[#D4A373] mr-2">●</span> Shabbat Schedule
      </h2>
      <p className="text-gray-600 mb-4">{shabbatDates.formatted}</p>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h3 className="font-semibold text-lg text-[#D4A373] mb-2">
            Friday Evening
          </h3>
          <p className="text-gray-600 mb-3">
            {shabbatDates.friday.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="grid gap-2 bg-gray-50 rounded-lg p-3 text-xs sm:text-sm">
            {schedule.fridayEvening.timetable.map((item, index) => (
              <div key={index} className="flex justify-between p-1">
                <span className="font-medium">{item.event}</span>
                <span className="font-bold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h3 className="font-semibold text-lg text-[#D4A373] mb-2">
            Shabbos Day
          </h3>
          <p className="text-gray-600 mb-3">
            {shabbatDates.saturday.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="grid gap-2 bg-gray-50 rounded-lg p-3 text-xs sm:text-sm">
            {schedule.shabbosDay.timetable.map((item, index) => (
              <div key={index} className="flex justify-between p-1">
                <span className="font-medium">{item.event}</span>
                <span className="font-bold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
