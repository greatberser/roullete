"use client";

import { useEffect, useState, useRef } from "react";
import { RouletteBets } from "./roulette-bets";
import { RouletteWheel } from "./roulette-wheel";
import { RouletteHistory } from "./roulette-history";
import { CellType, getRandomCell } from "@/lib/roulette-utils";
import { Icon } from "@/components/Icons/Icon";

export function RouletteGame() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCell, setSelectedCell] = useState<CellType | null>(null);
  const [history, setHistory] = useState<CellType[]>([]);
  const [timeToNextSpin, setTimeToNextSpin] = useState(60); 
  const [betAmount, setBetAmount] = useState("5"); 
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isCallingSpinRef = useRef(false);

  const [isInitialSpinComplete, setIsInitialSpinComplete] = useState(false);

  const startSpin = () => {
    if (isCallingSpinRef.current) {
        return;
    }
    isCallingSpinRef.current = true;

    setIsSpinning(true); 
    const newSelectedCell = getRandomCell(); 
    setSelectedCell(newSelectedCell);
    setHistory(prev => [newSelectedCell, ...prev.slice(0, 99)]);
    
    setTimeout(() => {
      setIsSpinning(false);
      setTimeToNextSpin(60); 
      if (!isInitialSpinComplete) {
        setIsInitialSpinComplete(true);
      }
      isCallingSpinRef.current = false;
    }, 1000); 
  };
  
  useEffect(() => {
    if (isInitialSpinComplete && !isSpinning) { 
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        timerRef.current = setInterval(() => {
            setTimeToNextSpin(prev => {
                if (prev <= 1) { 
                    clearInterval(timerRef.current!);
                    timerRef.current = null;
                    startSpin(); 
                    return 0; 
                }
                return prev - 1;
            });
        }, 1000); 
    } else {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isInitialSpinComplete, isSpinning]); 

  useEffect(() => {
    if (!isInitialSpinComplete && history.length === 0) {
      const initialSpinTriggerTimeout = setTimeout(() => {
        startSpin(); 
      }, 5000); 
      
      return () => clearTimeout(initialSpinTriggerTimeout);
    }
  }, [isInitialSpinComplete, history.length]); 

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (value.match(/^\d*\.?\d*$/) && !value.startsWith('.'))) {
      setBetAmount(value);
    }
  };

  const handleMinBet = () => {
    setBetAmount("1.00");
  };

  const handleMaxBet = () => {
    setBetAmount("100.00");
  };

  const handleHalfBet = () => {
    const currentAmount = parseFloat(betAmount);
    if (!isNaN(currentAmount) && currentAmount > 0) {
      setBetAmount((currentAmount / 2).toFixed(2));
    } else {
      setBetAmount("0.00");
    }
  };

  return (
    <div className="w-full space-y-8">
      <RouletteHistory history={history} />
      
      <div className="relative w-full">
        <RouletteWheel 
          isSpinning={isSpinning} 
          selectedCell={selectedCell}
          timeToNextSpin={timeToNextSpin}
          isInitialSpinComplete={isInitialSpinComplete} 
        />
        
        <div className="mt-4 flex justify-center">
          <div className="bg-[#1E2023] rounded-lg p-4 w-full max-w-xs flex flex-col gap-2">
            <label className="block text-sm text-gray-400">Bet Amount</label>
            <div className="relative flex items-center">
              <Icon name="icon-coin" className="w-5 h-5 text-green-400 absolute left-3" />
              <input
                type="text"
                value={betAmount}
                onChange={handleBetAmountChange}
                className="w-full bg-[#151619] text-white p-3 rounded border border-gray-700 focus:outline-none focus:border-[#FF5555] pl-10 pr-3"
              />
              <button 
                onClick={() => setBetAmount("")} 
                className="absolute right-3 text-gray-400 hover:text-white text-sm"
              >
                Clear
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button onClick={handleHalfBet} className="bg-[#2A3A4A] text-white py-2 rounded">1/2</button>
              <button onClick={handleMinBet} className="bg-[#2A3A4A] text-white py-2 rounded">Min</button>
              <button onClick={handleMaxBet} className="bg-[#2A3A4A] text-white py-2 rounded">Max</button>
            </div>
          </div>
        </div>
      </div>
      
      <RouletteBets />
    </div>
  );
}