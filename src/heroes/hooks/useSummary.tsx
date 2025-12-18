import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";

export const useSummary = () => {
  return useQuery({
    queryKey: ["summary"],
    queryFn: getSummaryAction,
    staleTime: 6000 * 5, // 5 minutes
  });
};
