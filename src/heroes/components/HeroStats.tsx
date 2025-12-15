import { Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { HeroStatCard } from "./HeroStatCard";

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard title="Total Characters">
        <CardContent>
          <div className="text-2xl font-bold">16</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              12 Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              2 Villains
            </Badge>
          </div>
        </CardContent>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18,8% of total</p>
      </HeroStatCard>
    </div>
  );
};
