# Shared and Reusable Components

The project has no third-party component library. Its reusable UI is a small custom set of React components styled with Tailwind utility classes. Navigation and footer components are documented in `layouts.md`.

## `src/components/Zmanim.tsx` — Zmanim

Fetches daily halachic times for ZIP code 07646 from Hebcal and renders a two-column time list. No props.

```tsx
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import content from "../../public/data/content.json";

interface ZmanimData {
  alotHaShachar: string;
  misheyakir: string;
  sunrise: string;
  sofZmanShma: string;
  sofZmanTfilla: string;
  chatzot: string;
  minchaGedola: string;
  minchaKetana: string;
  plagHaMincha: string;
  sunset: string;
  tzeit72min: string;
}

export default function Zmanim() {
  const [zmanim, setZmanim] = useState<ZmanimData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchZmanim = async () => {
      try {
        const today = dayjs().format("YYYY-MM-DD");
        const response = await fetch(
          `https://www.hebcal.com/zmanim?cfg=json&zip=${content.home.zip}&date=${today}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch zmanim data");
        }

        const data = await response.json();
        setZmanim(data.times);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchZmanim();
  }, []);

  const formatTime = (timeString: string) => {
    if (!timeString) return "N/A";
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Loading zmanim...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!zmanim) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-[#D4A373] mr-2">●</span> Today's Zmanim
      </h2>
      <p className="text-gray-600 mb-4">
        Date: {dayjs().format("M/D/YYYY")}, Source: Hebcal
      </p>
      <div className="grid gap-2 text-xs sm:text-sm">
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Alos HaShachar:</span><span className="font-bold">{formatTime(zmanim.alotHaShachar)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Earliest Tallis and Tefillin (Misheyakir):</span><span className="font-bold">{formatTime(zmanim.misheyakir)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Netz (Sunrise):</span><span className="font-bold">{formatTime(zmanim.sunrise)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Sof Zman Shema:</span><span className="font-bold">{formatTime(zmanim.sofZmanShma)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Sof Zman Tefillah:</span><span className="font-bold">{formatTime(zmanim.sofZmanTfilla)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Chatzos (Midday):</span><span className="font-bold">{formatTime(zmanim.chatzot)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Mincha Gedola:</span><span className="font-bold">{formatTime(zmanim.minchaGedola)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Mincha Ketana:</span><span className="font-bold">{formatTime(zmanim.minchaKetana)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Plag HaMincha:</span><span className="font-bold">{formatTime(zmanim.plagHaMincha)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Shkiah (Sunset):</span><span className="font-bold">{formatTime(zmanim.sunset)}</span></div>
        <div className="flex justify-between even:bg-gray-50 p-1"><span>Tzeis (72 min):</span><span className="font-bold">{formatTime(zmanim.tzeit72min)}</span></div>
      </div>
    </div>
  );
}
```

## `src/components/ShabbatSchedule.tsx` — ShabbatSchedule

Calculates the upcoming Friday/Saturday dates and renders the schedule stored in `content.json`. No props.

```tsx
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
  fridayEvening: { timetable: TimetableItem[] };
  shabbosDay: { timetable: TimetableItem[] };
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
      const formatDate = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      return { friday, saturday, formatted: `${formatDate(friday)} - ${formatDate(saturday)}, ${friday.getFullYear()}` };
    };
    setShabbatDates(getShabbatDates());
  }, []);

  if (!shabbatDates) {
    return <div className="bg-white rounded-lg shadow p-6"><p className="text-gray-600">Loading schedule...</p></div>;
  }

  const schedule = content.home.shabbatSchedule as ShabbatSchedule;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-2 flex items-center"><span className="text-[#D4A373] mr-2">●</span> Shabbat Schedule</h2>
      <p className="text-gray-600 mb-4">{shabbatDates.formatted}</p>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h3 className="font-semibold text-lg text-[#D4A373] mb-2">Friday Evening</h3>
          <p className="text-gray-600 mb-3">{shabbatDates.friday.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div className="grid gap-2 bg-gray-50 rounded-lg p-3 text-xs sm:text-sm">
            {schedule.fridayEvening.timetable.map((item, index) => <div key={index} className="flex justify-between p-1"><span className="font-medium">{item.event}</span><span className="font-bold">{item.time}</span></div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h3 className="font-semibold text-lg text-[#D4A373] mb-2">Shabbos Day</h3>
          <p className="text-gray-600 mb-3">{shabbatDates.saturday.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div className="grid gap-2 bg-gray-50 rounded-lg p-3 text-xs sm:text-sm">
            {schedule.shabbosDay.timetable.map((item, index) => <div key={index} className="flex justify-between p-1"><span className="font-medium">{item.event}</span><span className="font-bold">{item.time}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
```

## `src/components/ContactUs.tsx` — ContactUs

Reusable contact card with address, email, Lucide icons, and the static New Milford map illustration. Props: `address`, `phone`, `email` (all strings; phone is currently not rendered).

```tsx
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactUsProps {
  address: string;
  phone: string;
  email: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ address, phone, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">Have a question? We're here to help!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FDF4EA] p-3 rounded-full"><MapPin className="w-6 h-6 text-[#D4A373]" /></div>
            <div><h3 className="font-bold text-xl mb-1">Address</h3><p className="text-gray-600">{address}</p></div>
          </div>
          {/* Phone row is intentionally commented out in the source UI. */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#FDF4EA] p-3 rounded-full"><Mail className="w-6 h-6 text-[#D4A373]" /></div>
            <div><h3 className="font-bold text-xl mb-1">Email</h3><a href={`mailto:${email}`} className="text-[#D4A373] hover:underline">{email}</a></div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg h-full min-h-[300px] flex items-center justify-center">
          <img src="/nmnj-pin.png" alt="Map" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
```

## `src/components/Icons.tsx` — Icon

Small Lucide icon adapter used by the Donate page. Props: `name` (`heart | users | building`) and optional `className`.

```tsx
import { Heart, Users, Building } from "lucide-react";
import React from "react";

interface IconProps {
  name: "heart" | "users" | "building";
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "heart": return <Heart className={className} />;
    case "users": return <Users className={className} />;
    case "building": return <Building className={className} />;
    default: return null;
  }
};
```
