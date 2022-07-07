import {useCallback, useMemo, useState} from 'react';
import {getTime} from '../utilities/date-transform';
import {
  dataSorts,
  ITransactionResponse,
  SortList,
  SortType,
} from '../utilities/transaction-types';
import useService from './useService';

/**
 * Hooks for sort and search
 */

const useFilter = () => {
  // get data from service
  const {data} = useService();

  // state
  const [query, setQuery] = useState<string>('');
  const [sorts, setSorts] = useState<SortList>(dataSorts);

  /**
   * Memoized function to sort and search
   * based on @query and @sorts
   * @returns {ITransactionResponse | {}}
   */
  const transactions = useMemo(() => {
    const isDataExist: boolean = data !== null && Object.keys(data).length > 0;
    const isQueryExist: boolean = query.length > 0;
    if (isDataExist) {
      let transactionTemps: ITransactionResponse | null = {};
      const selectedSort = Object.keys(sorts).find(
        key => sorts[key as keyof typeof SortType].selected,
      );

      switch (selectedSort) {
        case SortType.NO_SELECTION:
          transactionTemps = data;
          break;
        case SortType.ASC:
          transactionTemps = Object.fromEntries(
            Object.entries(data as ITransactionResponse).sort(([, a], [, b]) =>
              a.beneficiary_name.localeCompare(b.beneficiary_name),
            ),
          );
          break;
        case SortType.DESC:
          transactionTemps = Object.fromEntries(
            Object.entries(data as ITransactionResponse).sort(([, a], [, b]) =>
              b.beneficiary_name.localeCompare(a.beneficiary_name),
            ),
          );
          break;
        case SortType.DATE_ASC:
          transactionTemps = Object.fromEntries(
            Object.entries(data as ITransactionResponse).sort(
              ([, a], [, b]) => getTime(b.created_at) - getTime(a.created_at),
            ),
          );
          break;
        case SortType.DATE_DESC:
          transactionTemps = Object.fromEntries(
            Object.entries(data as ITransactionResponse).sort(
              ([, a], [, b]) => getTime(a.created_at) - getTime(b.created_at),
            ),
          );
          break;
      }

      if (isQueryExist) {
        const querySearch = query.toLowerCase();
        const filteredByValue = Object.fromEntries(
          Object.entries(transactionTemps as ITransactionResponse).filter(
            ([_, value]) =>
              value.sender_bank.toLowerCase().includes(querySearch) ||
              value.beneficiary_bank.toLowerCase().includes(querySearch) ||
              value.beneficiary_name.toLowerCase().includes(querySearch) ||
              value.amount.toString().includes(querySearch),
          ),
        );
        return filteredByValue;
      }

      return transactionTemps;
    }
    return {};
  }, [query, data, sorts]);

  /**
   * Callback function to set query search
   */
  const onSearch = useCallback((text: string) => {
    setQuery(text);
  }, []);

  /**
   * Callback function to set sort
   */
  const onSort = useCallback(
    (type: SortType) => {
      const newSorts: SortList = {...sorts};
      Object.keys(newSorts).forEach(key => {
        newSorts[key as keyof typeof SortType].selected = false;
      });
      newSorts[type].selected = true;
      setSorts(newSorts);
    },
    [sorts],
  );

  return {data: transactions, query, sorts, onSearch, onSort};
};

export default useFilter;
