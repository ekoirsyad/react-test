import React, {ReactComponentElement, useCallback, useState} from 'react';
import {Clipboard, Image, Pressable, Text, View} from 'react-native';
import {colorPalette} from '../../../../utilities/styles/colors';
import {typography} from '../../../../utilities/styles/typography';
import {toUpperCase} from '../../../../utilities/text-transform';
import styles from './style';

interface ISection {
  title: string;
  content?: string;
  children?: ReactComponentElement<any>;
}

const Section = ({content, title, children}: ISection) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const toggleLabel = toggle ? 'Tutup' : 'Buka';

  const onCopy = useCallback(() => {
    Clipboard.setString(content as string);
  }, [content]);

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={typography.subTitle}>{toUpperCase(title)}</Text>
        {content ? (
          <Pressable style={styles.copyButton} onPress={onCopy}>
            <Text style={typography.subTitle}>{`#${content}`}</Text>
            <Image
              source={require('../../../../assets/Copy.png')}
              style={{tintColor: colorPalette.primary}}
            />
          </Pressable>
        ) : (
          <></>
        )}
        {children ? (
          <Pressable style={styles.toggle} onPress={onToggle}>
            <Text style={typography.button}>{toggleLabel}</Text>
          </Pressable>
        ) : (
          <></>
        )}
      </View>
      {children && toggle ? children : <></>}
    </>
  );
};

export default Section;