export type Car = {
  id: number;
  brand: string;
  model: string;
  category: string;
  price: number;
  seats: number;
  transmission: "Manual" | "Automatic";
  fuelCapacity: number;
  image: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  images?: string[];
  description: string;
};
