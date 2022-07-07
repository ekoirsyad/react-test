import React from 'react';
import {View} from 'react-native';
import {DetailStackScreen} from '../../utilities/navigator-configs';
import {ITransaction} from '../../utilities/transaction-types';
import Section from './components/section';
import SectionChildren from './components/section-children';
import styles from './style';

const DetailScreen = (props: DetailStackScreen) => {
  const {route} = props;
  const data: ITransaction = JSON.parse(route.params.data);

  return (
    <View style={styles.container}>
      <Section title="ID Transaksi:" content={data.id} />
      <Section
        title="DETAIL TRANSAKSI"
        children={<SectionChildren data={data} />}
      />
    </View>
  );
};

export default DetailScreen;
