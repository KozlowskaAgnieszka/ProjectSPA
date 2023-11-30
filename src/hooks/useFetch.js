import { useEffect, useState } from 'react';
import _ from 'lodash';

export function useFetch(fetchFn, route, initialValue) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setfetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const data = await fetchFn(route);
        setfetchedData(data);
        setIsEmpty(_.isEmpty(data));
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch data.',
        });
      }
      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    isEmpty,
    error,
    fetchedData,
  };
}
