import {useEffect, useState} from 'react';
import {ITransactionResponse} from '../utilities/transaction-types';

function useService() {
  const [data, setData] = useState<ITransactionResponse | null>(null);
  const [error, setError] = useState(null);

  async function getData(signal: AbortSignal) {
    return fetch('https://recruitment-test.flip.id/frontend-test', {signal})
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(e => setError(e));
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getData(signal);

    return function cleanUp() {
      abortController.abort();
    };
  }, []);

  return {data, error};
}

export default useService;
