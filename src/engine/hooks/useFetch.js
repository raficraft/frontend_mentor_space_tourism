import { useEffect, useState } from "react";

/**
 *
 * @param {String} url
 * @param {String} fields
 * @param {Number} TIME
 * @returns
 */

export const useFetch = (url, fields, TIME = 1000) => {
  const [data, setData] = useState({
    error: null,
    loading: true,
    items: [],
  });

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
    return () => fetchData(fields);
  }, []);

  return [data];
};
