import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import useFilter from '~hooks/useFilter';
import {HomeStackScreen} from '~utilities/navigator-configs';
import {IFilter, ITransaction} from '~utilities/transaction-types';
import ModalFilter from '~screens/home/components/modal-filter';
import SearchBar from '~screens/home/components/search-bar';
import TransactionItem from '~screens/home/components/transaction-item';
import styles from '~screens/home/style';

/**
 * key extractor for flatlist
 * @param item ITransaction
 * @returns string
 */
const keyExtractor = (item: ITransaction) => item.id;

/**
 * @returns Component for empty list on transaction
 */
const EmptyList = () => {
  return (
    <View style={styles.containerEmptyList}>
      <Text>Transaksi tidak ditemukan</Text>
    </View>
  );
};

/**
 * First page of the app
 * @param props {navigation, route}
 * @returns Screen Component for Home
 */
const HomeScreen = (props: HomeStackScreen) => {
  const {navigation} = props;
  const {data, onSearch, query, sorts, onSort} = useFilter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  /**
   * callback for onPress on Item Transaction
   * with params for Detail Screen
   */
  const onNavigateToDetail = useCallback(
    (item: ITransaction) => {
      const selectedItem = JSON.stringify(item);
      navigation.push('Detail', {data: selectedItem});
    },
    [navigation],
  );

  /**
   * call back for onPress of sort radio button
   * @param item IFilter
   */
  const onSelect = (item: IFilter) => {
    onSort(item.type);
    setModalOpen(false);
  };

  /**
   * call back for onPress of sort button in search bar
   */
  const onOpenModal = () => {
    setModalOpen(true);
  };

  /**
   * memoized string for selected sort
   * to render in search bar
   * @return string
   */
  const selectedSort: string = useMemo(() => {
    const selected = Object.values(sorts).find(
      (item: IFilter) => item.selected,
    );
    return selected ? selected.label : '';
  }, [sorts]);

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={onSearch}
        query={query}
        onOpenModal={onOpenModal}
        selected={selectedSort}
      />
      <FlatList
        style={styles.container}
        data={data ? Object.values(data) : []}
        extraData={data}
        renderItem={({item}) => (
          <TransactionItem
            item={item}
            onNavigateToDetail={onNavigateToDetail}
          />
        )}
        keyExtractor={keyExtractor}
        ListEmptyComponent={EmptyList}
      />
      <ModalFilter visible={modalOpen} sorts={sorts} onSelect={onSelect} />
    </View>
  );
};

export default HomeScreen;
