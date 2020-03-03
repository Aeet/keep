import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Color } from '../../config';
import { SvgXml } from 'react-native-svg';
import IconPlus from '../../icons/icon-plus.svg';
import ActionWrapper from '../../icons/action-wrapper.svg';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomBar = () => {
  const buttonProps = {
    style: styles.buttonWrapper,
    underlayColor: Color.GRAY.value,
    activeOpacity: 0.95,
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableHighlight {...buttonProps} onPress={() => {}}>
            <MIcon
              name="checkbox-marked-outline"
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </TouchableHighlight>
          <TouchableHighlight {...buttonProps} onPress={() => {}}>
            <FAIcon
              name="paint-brush"
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </TouchableHighlight>
          <TouchableHighlight {...buttonProps} onPress={() => {}}>
            <MIcon
              name="microphone"
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </TouchableHighlight>
          <TouchableHighlight {...buttonProps} onPress={() => {}}>
            <MIcon
              name="image-outline"
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.mainActionWrapper}>
          <SvgXml
            xml={ActionWrapper}
            fill={Color.SHARK_LIGHTER.value}
            fillOpacity={0.95}
          />
        </View>
      </View>
      <View style={styles.mainButtonWrapper}>
        <TouchableHighlight
          style={styles.mainButton}
          onPress={() => {}}
          underlayColor={Color.GRAY.value}
          activeOpacity={0.95}
        >
          {/* TODO remove SvgXml */}
          <SvgXml xml={IconPlus} />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    height: 50,
    backgroundColor: Color.SHARK_LIGHTER.value,
    opacity: 0.95,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mainActionWrapper: {
    overflow: 'visible',
    backgroundColor: 'transparent',
  },
  mainButtonWrapper: {
    position: 'absolute',
    width: 70,
    height: 70,
    right: 30,
    bottom: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    zIndex: 55,
  },
  mainButton: {
    width: 55,
    height: 55,
    backgroundColor: Color.SHARK_LIGHTER.value,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
