import React, { SFC, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { Color } from './../../../config';
import FIcon from 'react-native-vector-icons/Feather';

interface ColorPickerItemProps {
  color: { value: string };
  selected?: boolean;
  onPress: Function;
}

type EndResult = { finished: boolean };
type EndCallback = (result: EndResult) => void;

const animationDuration = 250;
const iconWrapperSize = 32;
const iconWrapperHighlightedSize = iconWrapperSize * 1.3;
const maxOpacity = 0.5;

const styles = StyleSheet.create({
  colorWrapper: {
    width: iconWrapperHighlightedSize,
    height: iconWrapperHighlightedSize,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: iconWrapperSize,
    height: iconWrapperSize,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: Math.floor(iconWrapperSize / 2),
  },
  iconWrapperHighlighted: {
    position: 'absolute',
    backgroundColor: Color.ATHENS_GRAY.value,
    top: 0,
    left: 0,
    width: iconWrapperHighlightedSize,
    height: iconWrapperHighlightedSize,
    borderRadius: Math.floor(iconWrapperHighlightedSize / 2),
  },
  icon: {
    opacity: 0.8,
  },
});

const ColorPickerItem: SFC<ColorPickerItemProps> = ({
  color,
  color: { value },
  selected,
  onPress,
}) => {
  const scaleValue = new Animated.Value(0.01);
  const opacityValue = new Animated.Value(maxOpacity);

  useEffect(() => {
    if (selected) {
      startHighlighter(animationDuration - 100, () => {
        stopHighlighter(animationDuration + 100);
      });
    } else {
      opacityValue.setValue(0.01);
    }
  }, [selected]);

  const startHighlighter = (duration: number, onDone?: EndCallback) => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: duration,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
    }).start(onDone);
  };

  const stopHighlighter = (duration: number, onDone?: EndCallback) => {
    Animated.timing(opacityValue, {
      toValue: 0.01,
      duration: duration,
    }).start(res => {
      scaleValue.setValue(0.01);
      opacityValue.setValue(maxOpacity);
      onDone?.(res);
    });
  };

  const onPressedIn = () => {
    startHighlighter(animationDuration);
  };

  const onPressedOut = () => {
    stopHighlighter(animationDuration + 100);
  };

  const onPressed = () => {
    if (!selected) {
      onPress(color);
    }
  };

  const iconWrapperHighlightedStyle = {
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressedIn}
      onPressOut={onPressedOut}
      onPress={onPressed}
    >
      <View style={styles.colorWrapper}>
        <Animated.View
          style={[styles.iconWrapperHighlighted, iconWrapperHighlightedStyle]}
        />
        <View style={[styles.iconWrapper, { backgroundColor: value }]}>
          {selected && (
            <FIcon
              name="check"
              size={16}
              color={Color.OSLO_GRAY.value}
              style={styles.icon}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ColorPickerItem;
