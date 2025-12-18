import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginated = (page: number, limit: number, category = "all") => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    /**
     * Arg -> page, limit
     * Arguments in queryKey
     */
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 50000,
  });
};
