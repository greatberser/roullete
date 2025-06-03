"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { CellType } from "@/lib/roulette-utils";
import { RouletteTimer } from "./roulette-timer";
import { Icon } from "@/components/Icons/Icon";

interface RouletteWheelProps {
  isSpinning: boolean;
  selectedCell: CellType | null;
  timeToNextSpin: number;
  isInitialSpinComplete: boolean;
}

export function RouletteWheel({
  isSpinning,
  selectedCell,
  timeToNextSpin,
  isInitialSpinComplete,
}: RouletteWheelProps) {
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Мемоїзуємо масив клітинок (cells)
  const cells = useMemo<CellType[]>(
    () => [
      { type: "red", value: 1 },
      { type: "black", value: 14 },
      { type: "red", value: 2 },
      { type: "black", value: 13 },
      { type: "red", value: 3 },
      { type: "black", value: 12 },
      { type: "red", value: 4 },
      { type: "black", value: 11 },
      { type: "red", value: 5 },
      { type: "green", value: 0 },
      { type: "black", value: 10 },
      { type: "red", value: 6 },
      { type: "black", value: 9 },
      { type: "red", value: 7 },
      { type: "black", value: 8 },
      { type: "joker", value: 15 },
    ],
    []
  );

  const CELL_VISUAL_WIDTH = 91;
  const CELL_GAP = 5;
  const CELL_TOTAL_WIDTH = useMemo(() => CELL_VISUAL_WIDTH + CELL_GAP, []);

  const singleStripWidth = useMemo(() => cells.length * CELL_TOTAL_WIDTH, [cells, CELL_TOTAL_WIDTH]);
  const fullWheelWidth = useMemo(() => singleStripWidth * 3, [singleStripWidth]);

  useEffect(() => {
    if (!wheelRef.current) return;

    const viewportWidth = wheelRef.current.parentElement!.clientWidth;
    const centerViewport = viewportWidth / 2;
    const targetCenterPosition = centerViewport - CELL_TOTAL_WIDTH / 2;

    const middleStripOffset = singleStripWidth;

    if (isSpinning) {
      setIsTransitionActive(true);
      const spinDistance = fullWheelWidth * 5 + Math.random() * singleStripWidth;
      setCurrentTranslateX(spinDistance);
    } else if (selectedCell) {
      const selectedIndex = cells.findIndex(
        (cell) => cell.type === selectedCell.type && cell.value === selectedCell.value
      );

      if (selectedIndex === -1) {
        setIsTransitionActive(false);
        setCurrentTranslateX(middleStripOffset - targetCenterPosition);
        return;
      }

      const targetXInMiddleStrip =
        selectedIndex * CELL_TOTAL_WIDTH + middleStripOffset - targetCenterPosition;

      setIsTransitionActive(true);
      setCurrentTranslateX(targetXInMiddleStrip);

      const animationDuration = 5000;
      const snapBackTimeout = setTimeout(() => {
        setIsTransitionActive(false);
        const snapBackX = selectedIndex * CELL_TOTAL_WIDTH - targetCenterPosition;
        setCurrentTranslateX(snapBackX);
      }, animationDuration + 50);

      return () => clearTimeout(snapBackTimeout);
    } else {
      setIsTransitionActive(false);
      setCurrentTranslateX(middleStripOffset - targetCenterPosition);
    }
  }, [isSpinning, selectedCell, cells, CELL_TOTAL_WIDTH, singleStripWidth, fullWheelWidth]);

  return (
    <div className="relative w-full h-24 overflow-hidden rounded-md">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#FF5555]"></div>

      <div
        ref={wheelRef}
        className={cn(
          "h-full flex items-center",
          isTransitionActive ? "transition-transform ease-out" : "transition-none"
        )}
        style={{
          transform: `translateX(-${currentTranslateX}px)`,
          width: `${fullWheelWidth}px`,
          gap: `${CELL_GAP}px`,
        }}
      >
        {[...cells, ...cells, ...cells].map((cell, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0 h-full aspect-square flex items-center justify-center rounded-md relative overflow-hidden",
              cell.type === "red"
                ? "bg-[#FF4242]"
                : cell.type === "black"
                ? "bg-[#343843]"
                : cell.type === "joker"
                ? "bg-[#7246D9]"
                : "bg-[#47FF69]",

              "shadow-xl",
              "shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.4)]",

              "before:content-[''] before:absolute before:inset-0 before:rounded-md",
              "before:bg-[linear-gradient(to_br,rgba(255,255,255,0.3),transparent,rgba(0,0,0,0.4))]",
              "after:content-[''] after:absolute after:inset-0 after:rounded-md",
              "after:bg-[linear-gradient(to_br,rgba(255,255,255,0.15),transparent)]"
            )}
            style={{
              width: `${CELL_VISUAL_WIDTH}px`,
            }}
          >
            {cell.type === "joker" ? (
              <Icon
                name="icon-joker"
                className="w-8 h-8 text-white z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
              />
            ) : (
              <Icon
                name="icon-arrow-split"
                className={`w-8 h-8 ${
                  cell.type === "red" ? "text-black" : "text-white"
                } z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        <RouletteTimer
          timeToNextSpin={timeToNextSpin}
          isSpinning={isSpinning}
          isInitialSpinComplete={isInitialSpinComplete}
        />
      </div>
    </div>
  );
}
