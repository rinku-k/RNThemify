import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PrimaryButton, GhostButton} from '../components/button';
import {ThemeContext} from '../theme';

const MainScreen = () => {
  const {themeObject} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: themeObject.colors.background}]}>
      <Text style={[style.text, {color: themeObject.texts.darkest}]}>Main Screen</Text>
      <PrimaryButton color={themeObject.colors.primary} text="Primary button" />
      <GhostButton color={themeObject.colors.secondary} text="Secondary button" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MainScreen;
