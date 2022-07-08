import React from 'react';
import {Text, View} from 'react-native';
import currencyTransformer from '../../../../utilities/currency-transform';
import dateTransformer from '../../../../utilities/date-transform';
import {typography} from '../../../../utilities/styles/typography';
import textTransform, {
  toCapitalized,
  toUpperCase,
} from '../../../../utilities/text-transform';
import {ITransaction} from '../../../../utilities/transaction-types';
import styles from './style';

interface ISectionChildren {
  data: ITransaction;
}

/**
 * @param IsectionChildren
 * @returns ReactComponentElement for Item in SectionChildren
 */
const Item = ({title, content}: {title: string; content: string}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={typography.contentBold}>{toUpperCase(title)}</Text>
      <Text style={typography.content}>{content}</Text>
    </View>
  );
};

/**
 * @param IsectionChildren
 * @returns Component Section Children in Detail Screen
 */
const SectionChildren = ({data}: ISectionChildren) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[typography.title]}>{`${textTransform(
        data.sender_bank,
      )}  \u2794  ${textTransform(data.beneficiary_bank)}`}</Text>
      <View style={styles.innerContainer}>
        <Item title={data.beneficiary_name} content={data.account_number} />
        <Item title={'Nominal'} content={currencyTransformer(data.amount)} />
      </View>
      <View style={styles.innerContainer}>
        <Item title={'Berita Transfer'} content={toCapitalized(data.remark)} />
        <Item title={'Kode Unik'} content={data.unique_code.toString()} />
      </View>
      <View style={styles.innerContainer}>
        <Item
          title={'Waktu Dibuat'}
          content={dateTransformer(data.created_at)}
        />
        <Item title={'Nominal'} content={currencyTransformer(data.amount)} />
      </View>
    </View>
  );
};

export default SectionChildren;
