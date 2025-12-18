import { BASE_URL, heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

/**
 * GET -> HTTP request for get heroes
 * @returns data
 */
export const getHeroesByPageAction = async (
  page: number,
  limit: number = 6,
  category: string = "all"
): Promise<HeroesResponse> => {
  /**
   * Validations NaN
   */
  if (isNaN(page)) page = 1;
  if (isNaN(limit)) page = 6;

  const { data } = await heroApi.get<HeroesResponse>("/", {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category,
    },
  });

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
