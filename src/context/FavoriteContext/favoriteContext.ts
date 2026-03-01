import { useContext } from "react";
import FavoriteContext from "./favoriteProvider";

const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }
  return context;
};

export default useFavorite;