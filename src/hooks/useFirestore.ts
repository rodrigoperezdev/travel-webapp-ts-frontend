import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../services/firestoreService";

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchFirestoreData(collectionName);
      setData(result);
      setLoading(false);
    };

    loadData();
  }, [collectionName]);

  return { data, loading };
};
