import { Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";

import { useSummary } from "@/heroes/hooks/useSummary";
import { usePaginated } from "@/heroes/hooks/usePaginated";
import { useHomePage } from "@/heroes/hooks/useHomePage";

export const HomePage = () => {
  const { limit, page, selectedTabs, category, setSearchParams } =
    useHomePage();

  /**
   * Use library tanStackQuery for request http
   */

  const { data: heroesResponse } = usePaginated(+page, +limit, category);
  const { data: summary } = useSummary();

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de Superheroes"
        description="Explora, descrube y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={selectedTabs} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all");
                prev.set("category", "all");
                prev.set("page", "1");
                return prev;
              })
            }
            value="all"
          >
            All Characters ({summary?.totalHeroes})
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
                prev.set("category", "hero");
                prev.set("page", "1");
                return prev;
              })
            }
            value="heroes"
          >
            Heroes ({summary?.heroCount})
          </TabsTrigger>

          <TabsTrigger
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "villains");
                prev.set("category", "villain");
                prev.set("page", "1");
                return prev;
              })
            }
            value="villains"
          >
            Villains ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="villains">
          {/* Mostrar todos los villanos */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
};
