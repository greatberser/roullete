export type CellType = {
  type: "red" | "black" | "green" | "joker";
  value: number;
};

const possibleCells: CellType[] = [
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
  { type: "joker", value: 50 }
];

export function getRandomCell(): CellType {
  const rand = Math.random();
  
  if (rand < 0.45) {
    // Red cells
    const redCells = possibleCells.filter(cell => cell.type === "red");
    return redCells[Math.floor(Math.random() * redCells.length)];
  } else if (rand < 0.90) {
    // Black cells
    const blackCells = possibleCells.filter(cell => cell.type === "black");
    return blackCells[Math.floor(Math.random() * blackCells.length)];
  } else if (rand < 0.95) {
    // Green cell
    return possibleCells.find(cell => cell.type === "green")!;
  } else {
    // Joker cell
    return possibleCells.find(cell => cell.type === "joker")!;
  }
}