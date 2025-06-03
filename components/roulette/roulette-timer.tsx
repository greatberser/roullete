"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RouletteTimerProps {
  timeToNextSpin: number; 
  isSpinning: boolean;
  isInitialSpinComplete: boolean; 
}

export function RouletteTimer({ timeToNextSpin, isSpinning, isInitialSpinComplete }: RouletteTimerProps) {
  const [displayTime, setDisplayTime] = useState(0); 

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isSpinning) {
      setDisplayTime(0);
      return;
    }

    if (!isInitialSpinComplete) {
      let initialPreSpinTime = 5; 
      let preSpinStartTime = Date.now();
      
      setDisplayTime(initialPreSpinTime * 1000);
      
      interval = setInterval(() => {
          const elapsed = Date.now() - preSpinStartTime;
          const remaining = Math.max(initialPreSpinTime * 1000 - elapsed, 0);
          setDisplayTime(remaining);

          if (remaining === 0) {
              clearInterval(interval!);
          }
      }, 16); 
    } else {
      setDisplayTime(timeToNextSpin * 1000); 
      
      let startTime = Date.now();
      let initialTime = timeToNextSpin * 1000;

      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(initialTime - elapsed, 0);
        setDisplayTime(remaining);

        if (remaining === 0) {
          clearInterval(interval!);
        }
      }, 16); 
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timeToNextSpin, isSpinning, isInitialSpinComplete]); 

  const seconds = (displayTime / 1000).toFixed(2); 

  return (
    <div className={cn("px-6 py-3 text-center")}>
      <div className="text-white-300 text-base font-bold leading-tight">
        {isSpinning ? "ROLLING..." : (isInitialSpinComplete ? "ROLLING IN:" : "FIRST ROLL IN:")}
      </div>
      <div className="text-white text-3xl font-bold leading-none mt-1">
        {isSpinning ? "0.00s" : seconds }
      </div>
    </div>
  );
}