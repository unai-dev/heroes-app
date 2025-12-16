import { useState } from "react";
import { Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

type activeTabState = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<activeTabState>("all");

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
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger onClick={() => setActiveTab("all")} value="all">
            All Characters (16)
          </TabsTrigger>

          <TabsTrigger
            onClick={() => setActiveTab("favorites")}
            value="favorites"
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>

          <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
            Heroes (12)
          </TabsTrigger>

          <TabsTrigger
            onClick={() => setActiveTab("villains")}
            value="villains"
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Mostrar todos los personajes */}
          <HeroGrid />
        </TabsContent>

        <TabsContent value="favorites">
          {/* Mostrar todos los personajes favoritos */}
          <HeroGrid />
        </TabsContent>

        <TabsContent value="heroes">
          {/* Mostrar todos los heroes */}
          <HeroGrid />
        </TabsContent>

        <TabsContent value="villains">
          {/* Mostrar todos los villanos */}
          <HeroGrid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={8} />
    </>
  );
};
