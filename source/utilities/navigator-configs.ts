import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetailScreen from '../screens/detail';
import HomeScreen from '../screens/home';

interface IScreen {
  name: keyof MainStackParamList;
  component: React.ComponentType<any>;
}

type IModules = {
  [key in keyof MainStackParamList]: IScreen;
};

export type MainStackParamList = {
  Home: undefined;
  Detail: {data: string};
};

export type HomeStackScreen = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>;

export type DetailStackScreen = NativeStackScreenProps<
  MainStackParamList,
  'Detail'
>;

export const modules: IModules = {
  Home: {
    name: 'Home',
    component: HomeScreen,
  },
  Detail: {
    name: 'Detail',
    component: DetailScreen,
  },
};
