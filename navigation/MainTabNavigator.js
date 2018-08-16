import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import WeatherScreen from '../screens/WeatherScreen';

export default createBottomTabNavigator({
  TodoStack: {
    screen : TodoScreen,
    navigationOptions: navigationOptions = {
      tabBarLabel: 'TODO',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            'md-checkmark-circle-outline'
          }
        />
      ),
    },
  },
  WeatherStack:{
    screen: WeatherScreen,
    navigationOptions: {
      tabBarLabel: 'Weather',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={'ios-cloudy-outline'}
        />
      ),
    }
  }
});
