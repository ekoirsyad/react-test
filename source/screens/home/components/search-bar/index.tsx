import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {colorPalette} from '~utilities/styles/colors';
import {typography} from '~utilities/styles/typography';
import {shortenText, toUpperCase} from '~utilities/text-transform';
import styles from '~screens/home/components/search-bar/style';

interface ISearchBar {
  onSearch: (text: string) => void;
  onOpenModal: () => void;
  query: string;
  selected: string;
}

/**
 * A Component for top section
 * on Home Screen used for search
 * & sort transaction
 * @param props ISearchBar
 * @returns React Element
 */
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
      <Pressable style={styles.buttonFilter} onPress={props.onOpenModal}>
        <Text style={[typography.content, styles.labelFilter]}>
          {shortenText(toUpperCase(props.selected), 10)}
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
