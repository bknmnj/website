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
          // {
          //   headers: {
          //     "Cache-Control": "no-cache, no-store, must-revalidate",
          //     Pragma: "no-cache",
          //     Expires: "0",
          //   },
          // }
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
      <div className="min-h-96 border-t-4 border-[#B48A45] bg-white p-7 text-[#10263B] shadow-xl sm:p-8">
        <p className="text-base text-[#58636D]">Loading zmanim...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-96 border-t-4 border-[#713B42] bg-white p-7 shadow-xl sm:p-8">
        <p className="text-[#713B42]">Error: {error}</p>
      </div>
    );
  }

  if (!zmanim) {
    return null;
  }

  return (
    <div className="h-full border-t-4 border-[#B48A45] bg-white p-7 text-[#20252A] shadow-xl sm:p-8">
      <div className="mb-6 flex flex-col gap-2 border-b border-[#B48A45]/55 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold italic text-[#10263B]">Today's Zmanim</h2>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8C682D]">
          {dayjs().format("M/D/YYYY")} · Source: Hebcal
        </p>
      </div>
      <div className="grid text-sm">
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Alos HaShachar:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.alotHaShachar)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Earliest Tallis and Tefillin (Misheyakir):</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.misheyakir)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Netz (Sunrise):</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.sunrise)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Sof Zman Shema:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.sofZmanShma)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Sof Zman Tefillah:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.sofZmanTfilla)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Chatzos (Midday):</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.chatzot)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Mincha Gedola:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.minchaGedola)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Mincha Ketana:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.minchaKetana)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Plag HaMincha:</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.plagHaMincha)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-[#E8DDC8]/65 py-2.5">
          <span>Shkiah (Sunset):</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.sunset)}</span>
        </div>
        <div className="flex items-start justify-between gap-5 py-2.5">
          <span>Tzeis (72 min):</span>
          <span className="shrink-0 font-bold tabular-nums text-[#10263B]">{formatTime(zmanim.tzeit72min)}</span>
        </div>
      </div>
    </div>
  );
}
