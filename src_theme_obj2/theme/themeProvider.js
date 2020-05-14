import React, {useState, useEffect} from 'react';
import {ThemeContext, THEMES, themes} from '../theme';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'THEME_NAME_KEY';

export const ThemeContextProvider = ({children}) => {
  const [themeObject, setTheme] = useState(themes[THEMES.LIGHT]);

  useEffect(() => {
    (async () => {
      const storedthemeName = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedthemeName) {
        setTheme(themes[storedthemeName]);
      } else {
        setTheme(themes[THEMES.LIGHT]);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{themeObject, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
