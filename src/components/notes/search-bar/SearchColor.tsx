import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchSection from './SearchSection';

const { width } = Dimensions.get('window');

const SearchColor = () => {
  return (
    <SearchSection title={'COLORS'}>
      <View style={styles.container}>
        {Color.ALL_COLORS.map(color => (
          <View style={styles.colorWrapper} key={color.value}>
            <TouchableOpacity
              style={styles.fullSize}
              containerStyle={styles.fullSize}
            >
              <View style={[styles.color, { backgroundColor: color.value }]} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SearchSection>
  );
};

export default SearchColor;

const spacing = 12;
const colorSize = (width - spacing * 7) / 6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    flexWrap: 'wrap',
    marginLeft: spacing,
    marginTop: spacing,
  },
  colorWrapper: {
    marginRight: spacing,
    marginBottom: spacing,
    width: colorSize,
    height: colorSize,
    padding: 2,
  },
  color: {
    borderRadius: 500,
    flex: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 1,
  },
  fullSize: {
    flex: 1,
  },
});
