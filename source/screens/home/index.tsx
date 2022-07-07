import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import useFilter from '../../hooks/useFilter';
import {HomeStackScreen} from '../../utilities/navigator-configs';
import {ITransaction} from '../../utilities/transaction-types';
import SearchBar from './components/search-bar';
import TransactionItem from './components/transaction-item';
import styles from './style';

const keyExtractor = (item: ITransaction) => item.id;

const EmptyList = () => {
  return (
    <View style={styles.containerEmptyList}>
      <Text>Transaksi tidak ditemukan</Text>
    </View>
  );
};

function HomeScreen(props: HomeStackScreen) {
  const {navigation} = props;
  const {data, onSearch, query} = useFilter();

  const onNavigateToDetail = useCallback(
    (item: ITransaction) => {
      const selectedItem = JSON.stringify(item);
      navigation.push('Detail', {data: selectedItem});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} query={query} />
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
    </View>
  );
}

export default HomeScreen;
