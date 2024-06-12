import { useEffect, useState } from "react";

export const useFetch = (inputUrl, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (url) => {
      const startTime = performance.now();
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (isMounted) {
          setData((prevData) =>
            Array.isArray(inputUrl) ? [...(prevData || []), json] : json
          );
          setTime(performance.now() - startTime);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setTime(performance.now() - startTime);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!inputUrl) throw new Error("Url is required!");

    if (Array.isArray(inputUrl)) {
      inputUrl.forEach((url) => fetchData(url));
    } else {
      fetchData(inputUrl);
    }

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(options), JSON.stringify(inputUrl)]);

  return {
    isLoading,
    data,
    error,
    time,
  };
};
