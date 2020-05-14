import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabBar from './components/tabbar';

import MainScreen from './screens/main';
import SettingsScreen from './screens/settings';

import {ThemeContextProvider} from './theme/themeProvider';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <AppContainer />
      </ThemeContextProvider>
    );
  }
}
