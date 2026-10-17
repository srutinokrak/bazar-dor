
export type Product = {
  id: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon?: string;
  image: string;
  unit: string;
  today: number;
  yesterday: number;
  change?: {
    dir: "up" | "down" | "same";
    pct: number;
  };
};