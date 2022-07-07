import React from 'react';
import {Text, TextInput, View} from 'react-native';
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
      <TextInput
        style={styles.textInputContainer}
        onChangeText={props.onSearch}
        value={props.query}
        placeholder={'Cari nama, bank, atau nominal'}
      />
      <View>
        <Text style={[typography.content, styles.labelFilter]}>
          {toUpperCase('Urutkan')}
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;
