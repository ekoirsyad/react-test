import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainStackParamList, modules} from './utilities/navigator-configs';
import style from './style';
import {colorPalette} from './utilities/styles/colors';

const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * NavigationContainer wrapped with SafeAreaView
 */

const Main = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colorPalette.tertiary}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={modules.Home.name}
            component={modules.Home.component}
          />
          <Stack.Screen
            name={modules.Detail.name}
            component={modules.Detail.component}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
