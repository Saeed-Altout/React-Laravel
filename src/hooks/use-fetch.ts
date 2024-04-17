import { useCallback, useEffect, useState } from "react";
import axios from "@/lib/axios";

interface UseFetchProps {
  endpoint: string;
  id?: string;
}

export const useFetch = ({ endpoint }: UseFetchProps) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(endpoint);
      setData(res.data.data);
    } catch (error) {
      setData([]);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
  };
};
