"use client";
import { useEffect, useState } from "react";
type Day = {
  date: string;
  count: number;
  level: number;
};
export default function GithubGraph({ username }: { username: string }) {
  const [data, setData] = useState<Day[]>([]);
  useEffect(() => {
  fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
    .then((res) => res.json())
    .then((res) => {
      console.log("API contri arr:", res.contributions[0]);
      const weeks = res?.contributions || [];
      if (!Array.isArray(weeks)) return;
      const days: Day[] = res.contributions.map((day: any) => ({
  date: day.date,
  count: day.count,
  level: day.level,
}));
console.log("FIRST ITEM:", res.contributions?.[0]);
      setData(days);
    })
    .catch((err) => console.error(err));
}, [username]);
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

const sorted = [...data].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);
const lastYearDays = sorted.filter(
  (day) => new Date(day.date) >= oneYearAgo
);

const weeks = chunkIntoWeeks(lastYearDays);
  function chunkIntoWeeks(days: Day[]) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}
function getColor(level: number) {
  switch (level) {
    case 0:
      return "bg-[#161b22]"; // GitHub dark base
    case 1:
      return "bg-gray-500/40";
    case 2:
      return "bg-gray-400/60";
    case 3:
      return "bg-gray-300/80";
    case 4:
      return "bg-white";
    default:
      return "bg-[#161b22]";
  }
}

console.log("Filtered days:", lastYearDays[0], lastYearDays.length);
  return (
   <div className="border border-white/10 rounded-xl p-4 bg-black">
  <h3 className="text-white text-sm mb-4">Contributions</h3>

  <div className="w-full overflow-x-auto">
    <div className="min-w-fit flex gap-[3px]">
      {weeks.map((week, i) => (
        <div key={i} className="flex flex-col gap-[3px]">
          {week.map((day, j) => (
            <div
              key={j}
              title={`${day.date} • ${day.count}`}
              className={`w-2.5 h-2.5 rounded-sm ${getColor(day.level)} hover:scale-125 transition`}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
  );
}