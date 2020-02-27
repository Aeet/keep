import React, { SFC, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Color } from './../../../config';
import ColorPickerItemProps from './ColorPickerItem';

interface ColorPickerProps {
  color?: string;
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 4,
  },
});

const ColorPicker: SFC<ColorPickerProps> = () => {
  const [color, setColor] = useState(Color.SHARK);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal
      data={Color.ALL_COLORS}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ColorPickerItemProps
          color={item}
          onPress={setColor}
          selected={color.value === item.value}
        />
      )}
      keyExtractor={item => item.value}
    />
  );
};

export default ColorPicker;
