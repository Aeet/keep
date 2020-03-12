import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AppText from '../../common/text/AppText';
import { Color } from '../../../config';
import searchStyles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const SearchColor = () => {
  return (
    <View>
      <View style={searchStyles.sectionHeader}>
        <AppText color={Color.SILVER_SAND.value} fontWeight="600" fontSize={12}>
          COLORS
        </AppText>
      </View>
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
    </View>
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
