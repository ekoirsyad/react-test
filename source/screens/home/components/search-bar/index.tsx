import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {colorPalette} from '../../../../utilities/styles/colors';
import {typography} from '../../../../utilities/styles/typography';
import {toUpperCase} from '../../../../utilities/text-transform';
import styles from './style';

interface ISearchBar {
  onSearch: (text: string) => void;
  query: string;
}

const SearchBar = (props: ISearchBar) => {
  return (
    <View style={[styles.container]}>
      <Image source={require('../../../../assets/Search.png')} />
      <TextInput
        style={styles.textInputContainer}
        onChangeText={props.onSearch}
        value={props.query}
        placeholder={'Cari nama, bank, atau nominal'}
      />
      <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[typography.content, styles.labelFilter]}>
          {toUpperCase('Urutkan')}
        </Text>
        <Image
          source={require('../../../../assets/ChevronDown.png')}
          style={{tintColor: colorPalette.primary}}
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;
