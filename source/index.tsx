import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import {SafeAreaView} from 'react-native';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Main;
