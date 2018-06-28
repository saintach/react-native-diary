import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/Home';
import DetailsScreen from './components/Entries';
import AddEntry from './components/AddEntry';

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Entries: DetailsScreen,
    Write: AddEntry,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Entries') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Write') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
