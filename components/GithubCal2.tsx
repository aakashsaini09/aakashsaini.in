"use client";

import { useEffect, useState } from "react";

type Day = {
  date: string;
  count: number;
  level: number;
};

export default function GithubGraph({ username }: { username: string }) {
  const [data, setData] = useState<Day[]>([]);
  const [totalFromAPI, setTotalFromAPI] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => res.json())
      .then((res) => {
        const days: Day[] = (res?.contributions || []).map((d: any) => ({
          date: d.date,
          count: d.count,
          level: d.level,
        }));

        setData(days);
        setTotalFromAPI(res.total || null); // 👈 important
      })
      .catch(console.error);
  }, [username]);

  // ✅ filter last 1 year
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  const filtered = data
    .filter((d) => {
      const date = new Date(d.date);
      return date >= oneYearAgo && date <= now;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const weeks = chunkIntoWeeks(filtered);
  const monthLabels = getMonthLabels(weeks);

  // ✅ stats
  const total = filtered.reduce((sum, d) => sum + d.count, 0);
  const { currentStreak, longestStreak } = calculateStreaks(filtered);

  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-sm">Contributions</h3>

        <div className="flex gap-4 text-xs text-gray-400">
          <span>{total} commits</span>
          <span>🔥 {currentStreak}d</span>
          <span>🏆 {longestStreak}d</span>
        </div>
      </div>

      {/* Graph */}
      <div className="w-full overflow-hidden">

        {/* Month Labels */}
        <div className="flex gap-[4px] mb-2 ml-6">
          {monthLabels.map((m, i) => (
            <div key={i} className="w-3 text-[10px] text-gray-500">
              {m}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-[4px]">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              {week.map((day, j) => (
                <div
                  key={j}
                  title={`${day.date} • ${day.count} contributions`}
                  className={`w-3 h-3 rounded-sm ${getColor(
                    day.level
                  )} transform-gpu hover:scale-125 transition-transform duration-150`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-gray-500">
        <span>Less</span>
        <div className="flex gap-[3px]">
          {[0, 1, 2, 3, 4].map((lvl) => (
            <div
              key={lvl}
              className={`w-3 h-3 rounded-sm ${getColor(lvl)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-400">
        <div className="flex flex-col text-xl">
          <span className="text-white font-semibold">
            {total}
          </span>
          <span>Total Contributions</span>
        </div>

        <div className="flex flex-col text-center text-xl">
          <span className="text-white font-semibold">
            {currentStreak}d
          </span>
          <span>Current Streak</span>
        </div>

        <div className="flex flex-col text-right text-xl">
          <span className="text-white font-semibold">
            {longestStreak}d
          </span>
          <span>Longest Streak</span>
        </div>

      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function chunkIntoWeeks(days: Day[]) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function getMonthLabels(weeks: Day[][]) {
  return weeks.map((week) => {
    const firstDay = week[0];
    if (!firstDay) return "";

    const date = new Date(firstDay.date);

    if (date.getDate() <= 7) {
      return date.toLocaleString("default", { month: "short" });
    }

    return "";
  });
}

function getColor(level: number) {
  switch (level) {
    case 0:
      return "bg-[#161b22]";
    case 1:
      return "bg-[#0e4429]";
    case 2:
      return "bg-[#006d32]";
    case 3:
      return "bg-[#26a641]";
    case 4:
      return "bg-[#39d353]";
    default:
      return "bg-[#161b22]";
  }
}

function calculateStreaks(days: Day[]) {
  let current = 0;
  let longest = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++;
    else break;
  }

  let temp = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i].count > 0) {
      temp++;
      longest = Math.max(longest, temp);
    } else {
      temp = 0;
    }
  }

  return { currentStreak: current, longestStreak: longest };
}