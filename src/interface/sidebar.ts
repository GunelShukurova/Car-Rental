import type { Car } from "../types/car";

export interface SidebarProps {
  cars: Car[];
  filteredCars: Car[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedSeats: number[];
  setSelectedSeats: (seats: number[]) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
}
