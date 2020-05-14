import React, {useState, useContext, useEffect} from 'react';
import {ThemeContext, themes} from '../theme';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'THEME_NAME_KEY';

export const ThemeContextProvider = ({children}) => {
  const [themeName, setThemeName] = useState(Object.keys(themes)[0]);

  useEffect(() => {
    (async () => {
      const storedthemeName = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedthemeName) {
        setThemeName(storedthemeName);
      } else {
        setThemeName(Object.keys(themes)[0]);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{themeName, setThemeName}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return props => {
    const {themeName, setThemeName} = useContext(ThemeContext);

    const getTheme = themeName => themes[themeName];
    const setTheme = themeName => {
      AsyncStorage.setItem(STORAGE_KEY, themeName);
      setThemeName(themeName);
    };

    return (
      <Component
        {...props}
        theme={getTheme(themeName)}
        setTheme={setTheme}
      />
    );
  };
}
