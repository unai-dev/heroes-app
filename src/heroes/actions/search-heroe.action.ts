import { BASE_URL, heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

export const searchHeroeAction = async (options: Options) => {
  const { category, name, status, strength, team, universe } = options;

  if (!name && !category && !status && !strength && !team && !universe)
    return [];

  const { data } = await heroApi<Hero[]>(`/search/`, {
    params: {
      name,
      status,
      strength,
      universe,
      category,
    },
  });

  return data.map((h) => ({
    ...h,
    image: `${BASE_URL}/images/${h.image}`,
  }));
};
