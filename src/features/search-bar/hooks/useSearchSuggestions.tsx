import { useState, useEffect, useMemo } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

interface CatalogItem {
  name: string;
}

export const useSearchSuggestions = () => {
  const [compoundSearchSuggestions, setCompoundSearchSuggestions] = useState<
    string[]
  >([]);

  const { data: activitiesCatalog, loading: loadingActivities } = useFirestore(
    "activities_catalog"
  ) as {
    data: CatalogItem[];
    loading: boolean;
  };
  const { data: destinationsCatalog, loading: loadingDestinations } =
    useFirestore("destinations_catalog") as {
      data: CatalogItem[];
      loading: boolean;
    };

  const isLoading = loadingActivities || loadingDestinations;

  useEffect(() => {
    if (!loadingActivities && !loadingDestinations) {
      const allNames = [
        ...activitiesCatalog
          .map((item) => item.name?.toLowerCase())
          .filter(Boolean),
        ...destinationsCatalog
          .map((item) => item.name?.toLowerCase())
          .filter(Boolean),
      ];
      setCompoundSearchSuggestions(allNames);
    }
  }, [
    activitiesCatalog,
    destinationsCatalog,
    loadingActivities,
    loadingDestinations,
  ]);

  const getFilteredSuggestions = useMemo(() => {
    return (searchValue: string) =>
      compoundSearchSuggestions
        .filter((name) => name.startsWith(searchValue.toLowerCase()))
        .slice(0, 4);
  }, [compoundSearchSuggestions]);

  return { getFilteredSuggestions, isLoading };
};
