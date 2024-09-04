import axios from "axios";
import { useState, useEffect } from "react";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
}

export const useFetchData = <T = unknown>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<T>(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
