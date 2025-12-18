import { useMemo } from "react";
import { Heart } from "lucide-react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * params functions
   * activeTab(section) -> all, favorites, villains, heroes
   * page -> 1, 2, 3...
   * limit -> limit of quantity heroes for page
   */
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTabs = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  /**
   * Use library tanStackQuery for request http
   */
  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes", "page", page],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 50000,
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de Superheroes"
        description="Explora, descrube y administra super heroes y villanos"
      />

      {/* Breadcrumb */}
      <CustomBreadcrumb currentPage="Super Heroes" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={selectedTabs} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                return prev;
              })
            }
            value="all"
          >
            All Characters ({heroesResponse?.heroes.length})
          </TabsTrigger>

          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "favorites");
                return prev;
              })
            }
            value="favorites"
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>

          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "heroes");
                return prev;
              })
            }
            value="heroes"
          >
            Heroes (12)
          </TabsTrigger>

          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "villains");
                return prev;
              })
            }
            value="villains"
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <HeroGrid heroes={[]} />
        </TabsContent>

        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <HeroGrid heroes={[]} />
        </TabsContent>

        <TabsContent value="villains">
          {/* Mostrar todos los villanos */}
          <HeroGrid heroes={[]} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
};
