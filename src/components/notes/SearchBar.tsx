import React from 'react';
import { StyleSheet, Animated, View, TextInput, Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { Color } from '../../config';

export const SearchBarDimensions = {
  height: 50,
  offsetTop: 10,
  sizeLogo: 35,
};

const SearchBar = ({ style }: any) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.iconWrapper}>
        <MIcon name="menu" size={25} color={Color.ATHENS_GRAY.value} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Color.SILVER_SAND.value}
        placeholder="Search your notes"
      />
      <View style={styles.iconWrapper}>
        <FIcon name="grid" size={25} color={Color.SILVER_SAND.value} />
      </View>
      <Image
        style={styles.logo}
        source={require('../../../assets/img/user-logo.jpg')}
      />
    </Animated.View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    overflow: 'hidden',
    flexDirection: 'row',
    right: 20,
    left: 20,
    height: SearchBarDimensions.height,
    top: SearchBarDimensions.offsetTop,
    zIndex: 55,
    borderRadius: 6,
    backgroundColor: Color.SHARK_LIGHTER.value,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: Color.SHARK_LIGHTER.value,
  },
  iconWrapper: {
    height: SearchBarDimensions.height,
    width: SearchBarDimensions.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: SearchBarDimensions.sizeLogo,
    width: SearchBarDimensions.sizeLogo,
    borderRadius: SearchBarDimensions.sizeLogo / 2,
    overflow: 'hidden',
    margin: 5,
  },
});
