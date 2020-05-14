import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTabBar} from 'react-navigation-tabs';

import {withTheme} from '../theme/themeProvider';

const TabBar = props => (
  <BottomTabBar
    {...props}
    style={{ backgroundColor: props.theme.colors.background }}
    activeTintColor={props.theme.texts.darkest}
    labelStyle={style.label}
  />
);

const style = StyleSheet.create({
  label: {fontSize: 22, fontWeight: '400'},
});

export default withTheme(TabBar);
