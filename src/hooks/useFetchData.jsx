import { useState, useEffect } from "react";

export default function useFetchData(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (!path) {
      setData(null);
      setLoading(false);
      return;
    }

    async function fetchData(path) {
      try {
        const response = await fetch(path);

        if (!response.ok) {
          throw new Error(`Reponse status: ${response.status}`);
        }

        const data = await response.json();

        if (!ignore) {
          setData(data);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    let ignore = false;
    fetchData(path);

    return () => {
      ignore = true;
    };
  }, [path]);

  return [data, loading, error];
}
