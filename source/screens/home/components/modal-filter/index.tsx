import React from 'react';
import {View, Modal, Text, Image, FlatList, Pressable} from 'react-native';
import {typography} from '~utilities/styles/typography';
import {IFilter, SortList} from '~utilities/transaction-types';

const RadioSelected = require('~assets/DotCircle.png');
const Radio = require('~assets/Circle.png');

import styles from '~screens/home/components/modal-filter/style';

interface IModalFilter {
  sorts: SortList;
  visible: boolean;
  onSelect: (item: IFilter) => void;
  onClose?: () => void;
}

interface IRadioButton {
  item: IFilter;
  onSelect: (item: IFilter) => void;
}

/**
 * funtion to extraxt key from item
 * @param item IFilter
 * @returns string of type
 */
const keyExtractor = (item: IFilter) => item.type.toString();

/**
 * A component to render radio button with its label
 * @param props IRadioButton
 * @returns React Element
 */
const RadioButton = (props: IRadioButton) => {
  const {onSelect, item} = props;
  return (
    <Pressable onPress={() => onSelect(item)} style={styles.button}>
      <Image
        source={item.selected ? RadioSelected : Radio}
        style={styles.image}
      />
      <Text style={typography.subTitle}>{item.label}</Text>
    </Pressable>
  );
};

/**
 * A component for displaying sort option
 * wrapped in modal
 * @param props IModalFilter
 * @returns React Element
 */
const ModalFilter = (props: IModalFilter) => {
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            data={Object.values(props.sorts)}
            extraData={Object.values(props.sorts)}
            renderItem={({item}) => (
              <RadioButton item={item} onSelect={props.onSelect} />
            )}
            keyExtractor={keyExtractor}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalFilter;
