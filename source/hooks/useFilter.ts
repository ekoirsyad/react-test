import {useCallback, useEffect, useMemo, useState} from 'react';
import {ITransactionResponse} from '../utilities/transaction-types';
import useService from './useService';

function useFilter() {
  const {data, error} = useService();
  const [query, setQuery] = useState<string>('');

  const transactions = useMemo(() => {
    const isDataExist: boolean = data !== null && Object.keys(data).length > 0;
    const isQueryExist: boolean = query.length > 0;
    if (isDataExist) {
      if (isQueryExist) {
        const querySearch = query.toLowerCase();
        const filteredByValue = Object.fromEntries(
          Object.entries(data as ITransactionResponse).filter(
            ([_, value]) =>
              value.sender_bank.toLowerCase().includes(querySearch) ||
              value.beneficiary_bank.toLowerCase().includes(querySearch) ||
              value.beneficiary_name.toLowerCase().includes(querySearch) ||
              value.amount.toString().includes(querySearch),
          ),
        );
        return filteredByValue;
      }
    }
    return data;
  }, [query, data]);

  console.log(transactions);

  const onSearch = useCallback((text: string) => {
    setQuery(text);
  }, []);

  return {data: transactions, onSearch, query};
}

export default useFilter;
