import React from 'react';
import {View} from 'react-native';
import {DetailStackScreen} from '~utilities/navigator-configs';
import {ITransaction} from '~utilities/transaction-types';
import Section from '~screens/detail/components/section';
import SectionChildren from '~screens/detail/components/section-children';
import styles from '~screens/detail/style';

const DetailScreen = (props: DetailStackScreen) => {
  const {route} = props;

  /**
   * data parsed from route.params
   * for detail transaction
   */
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
