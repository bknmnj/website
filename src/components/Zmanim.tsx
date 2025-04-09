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
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Alos HaShachar:</span>
          <span className="font-bold">{formatTime(zmanim.alotHaShachar)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Earliest Tallis and Tefillin (Misheyakir):</span>
          <span className="font-bold">{formatTime(zmanim.misheyakir)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Netz (Sunrise):</span>
          <span className="font-bold">{formatTime(zmanim.sunrise)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Sof Zman Shema:</span>
          <span className="font-bold">{formatTime(zmanim.sofZmanShma)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Sof Zman Tefillah:</span>
          <span className="font-bold">{formatTime(zmanim.sofZmanTfilla)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Chatzos (Midday):</span>
          <span className="font-bold">{formatTime(zmanim.chatzot)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Mincha Gedola:</span>
          <span className="font-bold">{formatTime(zmanim.minchaGedola)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Mincha Ketana:</span>
          <span className="font-bold">{formatTime(zmanim.minchaKetana)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Plag HaMincha:</span>
          <span className="font-bold">{formatTime(zmanim.plagHaMincha)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Shkiah (Sunset):</span>
          <span className="font-bold">{formatTime(zmanim.sunset)}</span>
        </div>
        <div className="flex justify-between even:bg-gray-50 p-1">
          <span>Tzeis (72 min):</span>
          <span className="font-bold">{formatTime(zmanim.tzeit72min)}</span>
        </div>
      </div>
    </div>
  );
}
