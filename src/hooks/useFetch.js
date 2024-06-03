import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, options)
        .then((res) => res.json())
        .then((json) => setData(json))
        .finally(() => setIsLoading(false))
        .catch((err) => setError(err));
    };

    if (!url) throw new Error("Url is required!");

    fetchData();
  }, [options, url]);

  return { isLoading, data, error };
};
