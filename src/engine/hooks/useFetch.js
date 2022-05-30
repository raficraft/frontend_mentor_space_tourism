import { useEffect, useState } from "react";

export const useFetch = (url, fields) => {
  const [data, setData] = useState({
    error: null,
    loading: true,
    items: [],
  });

  const TIME = 1000;

  useEffect(() => {
    async function fetchData(fields) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTimeout(() => {
          setData((S) => ({ ...S, loading: false, items: data[fields] }));
        }, TIME);
      } catch (error) {
        setData((S) => ({ ...S, error, loading: true, items: [] }));
        return false;
      }
    }
    fetchData(fields);
  }, []);

  return [data];
};
