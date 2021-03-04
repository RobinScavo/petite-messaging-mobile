import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/Feed';
import Search from '../screens/Search';
import AddPost from '../screens/AddPost';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';

const TabNavigator = createBottomTabNavigator({
  Feed: {
    screen: Feed
  },
  Search: {
    screen: Search
  },
  AddPost: {
    screen: AddPost
  },
  Activity: {
    screen: Activity
  },
  Profile: {
    screen: Profile
  }
});

export default createAppContainer(TabNavigator);