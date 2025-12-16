import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Explora, descrube y administra super heroes y villanos"
      />

      <CustomBreadcrumb
        currentPage="Search Page"
        breadcrumbs={[{ label: "Home", to: "/" }]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search Controls  */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
