"use client";

import { Icon } from "@/components/Icons/Icon";

interface Bet {
  user: string;
  amount: number;
}

const mockBets: { [key: string]: Bet[] } = {
  red: [
    { user: "User", amount: 100.00 },
    { user: "User", amount: 80.00 },
    { user: "User", amount: 50.00 },
    { user: "User", amount: 0.80 },
  ],
  green: [
    { user: "User", amount: 100.00 },
    { user: "User", amount: 80.00 },
    { user: "User", amount: 50.00 },
    { user: "User", amount: 0.80 },
  ],
  black: [
    { user: "User", amount: 100.00 },
    { user: "User", amount: 80.00 },
    { user: "User", amount: 50.00 },
    { user: "User", amount: 0.80 },
  ],
  joker: [
    { user: "User", amount: 100.00 },
    { user: "User", amount: 80.00 },
    { user: "User", amount: 50.00 },
    { user: "User", amount: 0.80 },
  ],
};

export function RouletteBets() {
  const calculateTotalAmount = (bets: Bet[]) => {
    return bets.reduce((sum, bet) => sum + bet.amount, 0);
  };

  return (
    <div className="w-full bg-[#1A1D20] rounded-lg p-4 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        <div className="flex flex-col h-full">
          <button
            className="flex-shrink-0 w-full py-2 rounded-md text-white font-semibold relative overflow-hidden
                       bg-gradient-to-br from-[#FF4242] to-[#FF4242]
                       border border-transparent
                       shadow-[0_4px_6px_rgba(0,0,0,0.3),_0_1px_3px_rgba(0,0,0,0.2)]
                       hover:brightness-110 active:translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,0,0,0.3),_0_1px_2px_rgba(0,0,0,0.1)]
                       transition-all duration-200 cursor-pointer mb-2"
          >
            <span className="relative z-10 flex items-center justify-between px-4 w-full">
              <span className="text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">BET ON RED</span>
              <span className="text-lg text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">PAYS 2X</span>
            </span>
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <div>
              <span className="text-white font-semibold">{mockBets.red.length}</span> Bets total
            </div>
            <div className="flex items-center gap-1">
              <Icon name="icon-coin" className="w-4 h-4 text-green-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
              <span className="text-white font-semibold">{calculateTotalAmount(mockBets.red).toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2 flex-grow overflow-hidden custom-scrollbar-hidden">
            {mockBets.red.map((bet, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#151619] p-2 rounded relative overflow-hidden
                           shadow-sm shadow-black/30 border border-gray-700/50 text-sm
                           bg-gradient-to-br from-[#1A1D20] to-[#151619]"
              >
                <div className="flex items-center gap-2">
                  <Icon name="icon-diamond" className="w-3 h-3 text-orange-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-gray-300">{bet.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="icon-coin" className="w-3 h-3 text-green-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-white">{bet.amount.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full">
          <button
            className="flex-shrink-0 w-full py-2 rounded-md text-white font-semibold relative overflow-hidden
                       bg-gradient-to-br from-[#47FF69] to-[#47FF69]
                       border border-transparent
                       shadow-[0_4px_6px_rgba(0,0,0,0.3),_0_1px_3px_rgba(0,0,0,0.2)]
                       hover:brightness-110 active:translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,0,0,0.3),_0_1px_2px_rgba(0,0,0,0.1)]
                       transition-all duration-200 cursor-pointer mb-2"
          >
            <span className="relative z-10 flex items-center justify-between px-4 w-full">
              <span className="text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">BET ON GREEN</span>
              <span className="text-lg text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">PAYS 14X</span>
            </span>
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <div>
              <span className="text-white font-semibold">{mockBets.green.length}</span> Bets total
            </div>
            <div className="flex items-center gap-1">
              <Icon name="icon-coin" className="w-4 h-4 text-green-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
              <span className="text-white font-semibold">{calculateTotalAmount(mockBets.green).toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2 flex-grow overflow-hidden custom-scrollbar-hidden">
            {mockBets.green.map((bet, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#151619] p-2 rounded relative overflow-hidden
                           shadow-sm shadow-black/30 border border-gray-700/50 text-sm
                           bg-gradient-to-br from-[#1A1D20] to-[#151619]"
              >
                <div className="flex items-center gap-2">
                  <Icon name="icon-diamond" className="w-3 h-3 text-orange-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-gray-300">{bet.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="icon-coin" className="w-3 h-3 text-green-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-white">{bet.amount.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full">
          <button
            className="flex-shrink-0 w-full py-2 rounded-md text-white font-semibold relative overflow-hidden
                       bg-gradient-to-br from-[#343843] to-[#343843]
                       border border-transparent
                       shadow-[0_4px_6px_rgba(0,0,0,0.3),_0_1px_3px_rgba(0,0,0,0.2)]
                       hover:brightness-110 active:translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,0,0,0.3),_0_1px_2px_rgba(0,0,0,0.1)]
                       transition-all duration-200 cursor-pointer mb-2"
          >
            <span className="relative z-10 flex items-center justify-between px-4 w-full">
              <span className="text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">BET ON BLACK</span>
              <span className="text-lg text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">PAYS 2X</span>
            </span>
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <div>
              <span className="text-white font-semibold">{mockBets.black.length}</span> Bets total
            </div>
            <div className="flex items-center gap-1">
              <Icon name="icon-coin" className="w-4 h-4 text-green-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
              <span className="text-white font-semibold">{calculateTotalAmount(mockBets.black).toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2 flex-grow overflow-hidden custom-scrollbar-hidden">
            {mockBets.black.map((bet, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#1A2024] p-2 rounded relative overflow-hidden
                           shadow-sm shadow-black/30 border border-gray-700/50 text-sm
                           bg-gradient-to-br from-[#1A1D20] to-[#151619]"
              >
                <div className="flex items-center gap-2">
                  <Icon name="icon-diamond" className="w-3 h-3 text-orange-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-gray-300">{bet.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="icon-coin" className="w-3 h-3 text-green-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-white">{bet.amount.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full">
          <button
            className="flex-shrink-0 w-full py-2 rounded-md text-white font-semibold relative overflow-hidden
                       bg-gradient-to-br from-[#7246D9] to-[#7246D9]
                       border border-transparent
                       shadow-[0_4px_6px_rgba(0,0,0,0.3),_0_1px_3px_rgba(0,0,0,0.2)]
                       hover:brightness-110 active:translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,0,0,0.3),_0_1px_2px_rgba(0,0,0,0.1)]
                       transition-all duration-200 cursor-pointer mb-2"
          >
            <span className="relative z-10 flex items-center justify-between px-4 w-full">
              <span className="text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">BET ON JOKER</span>
              <span className="text-lg text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">PAYS 7X</span>
            </span>
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <div>
              <span className="text-white font-semibold">{mockBets.joker.length}</span> Bets total
            </div>
            <div className="flex items-center gap-1">
              <Icon name="icon-coin" className="w-4 h-4 text-green-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
              <span className="text-white font-semibold">{calculateTotalAmount(mockBets.joker).toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2 flex-grow custom-scrollbar-hidden">
            {mockBets.joker.map((bet, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#151619] p-2 rounded relative overflow-hidden
                           shadow-sm shadow-black/30 border border-gray-700/50 text-sm
                           bg-gradient-to-br from-[#1A1D20] to-[#151619]"
              >
                <div className="flex items-center gap-2">
                  <Icon name="icon-diamond" className="w-3 h-3 text-orange-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-gray-300">{bet.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="icon-coin" className="w-3 h-3 text-green-400 z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                  <span className="z-10 text-white">{bet.amount.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}