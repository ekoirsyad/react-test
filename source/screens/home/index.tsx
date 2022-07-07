import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import useFilter from '../../hooks/useFilter';
import {HomeStackScreen} from '../../utilities/navigator-configs';
import {IFilter, ITransaction} from '../../utilities/transaction-types';
import ModalFilter from './components/modal-filter';
import SearchBar from './components/search-bar';
import TransactionItem from './components/transaction-item';
import styles from './style';

/**
 * key extractor for flatlist
 * @param item ITransaction
 * @returns string
 */
const keyExtractor = (item: ITransaction) => item.id;

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
function HomeScreen(props: HomeStackScreen) {
  const {navigation} = props;
  const {data, onSearch, query, sorts, onSort} = useFilter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onNavigateToDetail = useCallback(
    (item: ITransaction) => {
      const selectedItem = JSON.stringify(item);
      navigation.push('Detail', {data: selectedItem});
    },
    [navigation],
  );

  const onSelect = (item: IFilter) => {
    onSort(item.type);
    setModalOpen(false);
  };

  const onOpenModal = () => {
    setModalOpen(true);
  };

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
}

export default HomeScreen;
