"use client";

import { CellType } from "@/lib/roulette-utils";
import { Icon } from "@/components/Icons/Icon";

interface RouletteHistoryProps {
  history: CellType[];
}

export function RouletteHistory({ history }: RouletteHistoryProps) {
  const recentHistory = history.slice(0, 10);

  const counts = {
    red: history.filter(cell => cell.type === "red").length,
    black: history.filter(cell => cell.type === "black").length,
    green: history.filter(cell => cell.type === "green").length,
    joker: history.filter(cell => cell.type === "joker").length,
  };

  return (
    <div className="w-full flex justify-between items-center bg-[#1A1D20] p-2 rounded-lg mb-8">
      <div className="flex gap-1">
        {recentHistory.map((cell, index) => (
          <div
            key={index}
            className={`
              w-10 h-10 rounded flex items-center justify-center relative overflow-hidden
              ${cell.type === "red" ? "bg-[#FF4242]" :
                cell.type === "black" ? "bg-[#343843]" :
                cell.type === "joker" ? "bg-[#7246D9]" :
                "bg-[#47FF69]"}

              shadow-xl
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]

              before:content-[''] before:absolute before:inset-0 before:rounded-md
              before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]
              after:content-[''] after:absolute after:inset-0 after:rounded-md
              after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]
            `}
          >
            {cell.type === "joker" ? (
              <Icon name="icon-joker" className="w-6 h-6 text-white z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            ) : (
              <Icon
                name="icon-arrow-split"
                className={`w-6 h-6 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] ${cell.type === "red" ? "text-black" : "text-white"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">LAST 100</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className={`
              w-10 h-10 rounded flex items-center justify-center relative overflow-hidden
              bg-[#FF4242]
              shadow-xl
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]
              before:content-[''] before:absolute before:inset-0 before:rounded-md
              before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]
              after:content-[''] after:absolute after:inset-0 after:rounded-md
              after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]
            `}>
              <Icon name="icon-arrow-split" className="w-6 h-6 text-black z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </div>
            <span className="text-white">{counts.red}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`
              w-10 h-10 rounded flex items-center justify-center relative overflow-hidden
              bg-[#343843]
              shadow-xl
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]
              before:content-[''] before:absolute before:inset-0 before:rounded-md
              before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]
              after:content-[''] after:absolute after:inset-0 after:rounded-md
              after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]
            `}>
              <Icon name="icon-arrow-split" className="w-6 h-6 text-white z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </div>
            <span className="text-white">{counts.black}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`
              w-10 h-10 rounded flex items-center justify-center relative overflow-hidden
              bg-[#47FF69]
              shadow-xl
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]
              before:content-[''] before:absolute before:inset-0 before:rounded-md
              before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]
              after:content-[''] after:absolute after:inset-0 after:rounded-md
              after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]
            `}>
              <Icon name="icon-arrow-split" className="w-6 h-6 text-white z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </div>
            <span className="text-white">{counts.green}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`
              w-10 h-10 rounded flex items-center justify-center relative overflow-hidden
              bg-[#7246D9]
              shadow-xl
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]
              before:content-[''] before:absolute before:inset-0 before:rounded-md
              before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]
              after:content-[''] after:absolute after:inset-0 after:rounded-md
              after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]
            `}>
              <Icon name="icon-joker" className="w-6 h-6 text-white z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </div>
            <span className="text-white">{counts.joker}</span>
          </div>
        </div>
      </div>
    </div>
  );
}