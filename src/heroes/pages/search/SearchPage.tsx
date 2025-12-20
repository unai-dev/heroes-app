import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { useQuery } from "@tanstack/react-query";
import { searchHeroeAction } from "@/heroes/actions/search-heroe.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? "";

  const { data: heroResponse = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroeAction({ name }),
    staleTime: 50_000,
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Explora, descrube y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search Controls  */}
      <SearchControls />

      <HeroGrid heroes={heroResponse} />
    </>
  );
};

export default SearchPage;
