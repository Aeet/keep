import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  View,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../../config';
import SearchHome from './SearchHome';

export const SearchBarDimensions = {
  height: 50,
  offsetTop: 10,
  sizeLogo: 35,
};

const SearchBar = ({ style }: any) => {
  const [focused, setFocused] = useState(false);
  const textInputRef: any = useRef(false);

  const handleBackButton = () => {
    textInputRef?.current?.blur();
    setFocused(false);
  };

  return (
    <Animated.View
      style={[styles.container, style, focused && styles.expandContainer]}
    >
      <View style={[styles.header, focused && styles.headerTab]}>
        <View style={styles.iconWrapper}>
          {focused ? (
            <IIcon
              name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
              size={25}
              color={Color.ATHENS_GRAY.value}
              onPress={handleBackButton}
            />
          ) : (
            <MIcon name="menu" size={25} color={Color.ATHENS_GRAY.value} />
          )}
        </View>
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholderTextColor={Color.SILVER_SAND.value}
          placeholder="Search your notes"
          onFocus={() => setFocused(true)}
        />
        {!focused && (
          <>
            <View style={styles.iconWrapper}>
              <FIcon name="grid" size={25} color={Color.SILVER_SAND.value} />
            </View>
            <Image
              style={styles.logo}
              source={require('../../../../assets/img/user-logo.jpg')}
            />
          </>
        )}
      </View>
      {focused && <SearchHome />}
    </Animated.View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    overflow: 'hidden',
    right: 20,
    left: 20,
    top: SearchBarDimensions.offsetTop,
    zIndex: 55,
    borderRadius: 6,
    backgroundColor: Color.SHARK_LIGHTER.value,
  },
  expandContainer: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
  },
  header: {
    flexDirection: 'row',
    height: SearchBarDimensions.height,
    alignItems: 'center',
  },
  headerTab: {
    height: SearchBarDimensions.height + SearchBarDimensions.offsetTop - 4,
  },
  textInput: {
    flex: 1,
    color: Color.ATHENS_GRAY.value,
    fontSize: 16,
    fontFamily: 'Roboto',
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
