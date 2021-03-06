import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withTheme} from '../theme/themeProvider';
import {themes} from '../theme';

const SettingsScreen = ({theme, setTheme}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => setTheme(item)}>
      <View
        style={[
          style.itemContainer,
          {
            backgroundColor: themes[item].colors.background,
          },
        ]}>
        <Text style={[style.itemText, {color: themes[item].texts.darkest}]}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      style={style.container}
      ListHeaderComponent={
        <Text style={[style.headline, {color: '#000'}]}>
          Choose your theme:
        </Text>
      }
      data={Object.keys(themes)}
      renderItem={renderItem}
    />
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: {fontWeight: 'bold'},
});

export default withTheme(SettingsScreen);
