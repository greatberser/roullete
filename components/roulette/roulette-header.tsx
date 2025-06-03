"use client";

import { LucideFlame } from "lucide-react";

export function RouletteHeader() {
  return (
    <header className="bg-[#1A2530] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LucideFlame className="h-6 w-6 text-[#FF5555]" />
        <span className="text-xl font-bold">ClashRoulette</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Home
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Double
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Jackpot
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          History
        </a>
      </nav>
      <button className="bg-[#FF5555] text-white px-4 py-2 rounded-md hover:bg-[#FF3333] transition-colors">
        Login
      </button>
    </header>
  );
}