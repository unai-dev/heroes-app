/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface Props {
  favorites: Hero[];
  favoriteCount: number;

  toggleFavorites: (hero: Hero) => void;

  isFavorite: (hero: Hero) => boolean;
}

export const FavoriteHeroContext = createContext({} as Props);

const getFavoritesLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");

  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesLocalStorage);

  const toogleFavorites = (hero: Hero) => {
    const heroExists = favorites.find((h) => h.id === hero.id);

    if (heroExists) {
      const newFavorites = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }

    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: favorites.length,
        favorites: favorites,

        toggleFavorites: toogleFavorites,
        isFavorite: isFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
