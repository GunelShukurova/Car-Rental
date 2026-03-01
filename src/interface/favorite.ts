 export interface IFavoriteContext {
  favorites: number[]; 
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}