import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { api } from "../lib/api";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await api(url);
      setData(data);
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
}
