import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHomePage = () => {
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
  const category = searchParams.get("category") ?? "all";

  const selectedTabs = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  return {
    activeTab,
    page,
    selectedTabs,
    limit,
    category,
    setSearchParams,
  };
};
