import React, { SFC } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Color } from './../../../config';
import ColorPickerItem from './ColorPickerItem';

interface ColorPickerProps {
  color?: string;
  onChangeColor: Function;
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 4,
  },
});

const ColorPicker: SFC<ColorPickerProps> = ({ color, onChangeColor }) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal
      data={Color.ALL_COLORS}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ColorPickerItem
          color={item}
          onPress={onChangeColor}
          selected={color === item.value}
        />
      )}
      keyExtractor={item => item.value}
    />
  );
};

export default ColorPicker;
