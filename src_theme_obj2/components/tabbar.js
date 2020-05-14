import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {BottomTabBar} from 'react-navigation-tabs';
import {ThemeContext} from '../theme';

const TabBar = props => {
  const {themeObject, setTheme} = useContext(ThemeContext);
  return (
    <BottomTabBar
      {...props}
      style={{ backgroundColor: themeObject.colors.background }}
      activeTintColor={themeObject.texts.darkest}
      labelStyle={style.label}
    />
  );
};

const style = StyleSheet.create({
  label: {fontSize: 22, fontWeight: '400'},
});

export default TabBar;
