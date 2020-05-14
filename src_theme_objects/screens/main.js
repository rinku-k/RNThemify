import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PrimaryButton, GhostButton} from '../components/button';
import {themes, ThemeContext} from '../theme';

const {themeName} = useContext(ThemeContext);

const MainScreen = () => {
  return (
    <View style={[style.container, {backgroundColor: themes[themeName].colors.background}]}>
      <Text style={[style.text, {color: themes[themeName].texts.darkest}]}>Main Screen</Text>
      <PrimaryButton color={themes[themeName].colors.primary} text="Primary button" />
      <GhostButton color={themes[themeName].colors.secondary} text="Secondary button" />
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
