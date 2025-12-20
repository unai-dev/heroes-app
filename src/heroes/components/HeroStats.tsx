import { use } from "react";
import { Heart, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { HeroStatCard } from "./HeroStatCard";
import { useSummary } from "../hooks/useSummary";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

export const HeroStats = () => {
  const { data: summary } = useSummary();

  const { favoriteCount } = use(FavoriteHeroContext);

  if (!summary) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="h-4 w-4 text-muted gap-4 mb-8" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount}
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount}
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        {/* TODO */}
        <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
        <p className="text-xs text-muted-foreground">
          {((favoriteCount / summary.heroCount) * 100).toFixed(2)} % of total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Fuerte"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.name}</div>
        <p className="text-xs text-muted-foreground">
          Strength: {summary?.strongestHero.strength}
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Inteligente"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summary?.smartestHero.name}</div>
        <p className="text-xs text-muted-foreground">
          Intelligence:{summary?.smartestHero.intelligence}
        </p>
      </HeroStatCard>
    </div>
  );
};
