import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback } from "react";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchData = <T = unknown>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<T>(url);
      setData(res.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};
