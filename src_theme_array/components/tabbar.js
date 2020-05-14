import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTabBar} from 'react-navigation-tabs';

import {withTheme} from '../theme/themeProvider';

const TabBar = props => (
  <BottomTabBar
    {...props}
    activeTintColor={props.theme.backgroundColor}
    labelStyle={style.label}
  />
);

const style = StyleSheet.create({
  label: {fontSize: 22, fontWeight: '400'},
});

export default withTheme(TabBar);
