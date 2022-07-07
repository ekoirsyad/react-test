import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import currencyTransformer from '../../../../utilities/currency-transform';
import dateTransformer from '../../../../utilities/date-transform';
import {colorPalette} from '../../../../utilities/styles/colors';
import {typography} from '../../../../utilities/styles/typography';
import textTransform, {toUpperCase} from '../../../../utilities/text-transform';
import {ITransaction} from '../../../../utilities/transaction-types';
import styles from './style';

const TransactionStatus = ({status}: {status: string}) => {
  const statusContainer: ViewStyle =
    status === 'SUCCESS'
      ? styles.statusContainerSuccess
      : styles.statusContainerPending;
  const statusLabel: TextStyle =
    status === 'SUCCESS'
      ? styles.statusLabelSuccess
      : styles.statusLabelPending;
  const statusText: string = status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
  return (
    <View style={statusContainer}>
      <Text style={statusLabel}>{`${statusText}`}</Text>
    </View>
  );
};

const TransactionItem = ({item}: {item: ITransaction}) => {
  const borderColor: ViewStyle = {
    borderStartColor:
      item.status === 'SUCCESS' ? colorPalette.secondary : colorPalette.primary,
  };
  return (
    <View style={[styles.itemContainer, borderColor]}>
      <View>
        <Text style={[typography.title, styles.labelTitle]}>{`${textTransform(
          item.sender_bank,
        )}  \u2794  ${textTransform(item.beneficiary_bank)}`}</Text>
        <Text style={typography.content}>{`${toUpperCase(
          item.beneficiary_name,
        )}`}</Text>
        <Text style={typography.content}>{`${currencyTransformer(
          item.amount,
        )} \u2B24 ${dateTransformer(item.created_at)}`}</Text>
      </View>
      <TransactionStatus status={item.status} />
    </View>
  );
};

export default TransactionItem;
