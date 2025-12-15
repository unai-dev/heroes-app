import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Explora, descrube y administra super heroes y villanos"
      />
      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};

export default SearchPage;
