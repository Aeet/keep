import React, { SFC } from 'react';
import { Text, StyleSheet } from 'react-native';

export interface NoteItemProps {
  fontSize?: number;
  color?: string;
  numberOfLines?: number;
  fontWeight?: string;
}

const AppText: SFC<NoteItemProps> = ({
  children,
  fontSize,
  color,
  fontWeight,
  numberOfLines,
}) => {
  let style = {};
  if (fontSize) {
    style = { ...style, fontSize };
  }

  if (color) {
    style = { ...style, color };
  }

  if (fontWeight) {
    style = { ...style, fontWeight };
  }
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: '#e8eaed',
    fontSize: 14,
  },
});
