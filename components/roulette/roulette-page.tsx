"use client";

import { RouletteGame } from "./roulette-game";

export function RoulettePage() {
  return (
    <div className="min-h-screen bg-[#151619] text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-[1440px] mx-auto w-full">
        <RouletteGame />
      </main>
    </div>
  );
}