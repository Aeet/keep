import React, { SFC, useEffect } from 'react';
import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  Animated,
  Dimensions,
  Easing,
  Platform,
} from 'react-native';
import { Color } from '../../../config';
const { height, width } = Dimensions.get('window');

interface BottomMenuDrawerProps {
  style?: StyleProp<ViewStyle>;
  visible: boolean;
  backgroundColor: string;
}

interface Styles {
  container: ViewStyle;
  visible: ViewStyle;
}

const BottomMenuDrawer: SFC<BottomMenuDrawerProps> = ({
  children,
  style,
  visible,
  backgroundColor,
}) => {
  const yTranslate = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.spring(yTranslate, {
        toValue: -height - 50,
        friction: 10,
      }).start();
    } else {
      Animated.timing(yTranslate, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
      }).start();
    }
  }, [visible]);

  const translateStyle = { transform: [{ translateY: yTranslate }] };

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        translateStyle,
        { backgroundColor },
        visible && styles.visible,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default BottomMenuDrawer;

const styles = StyleSheet.create<Styles>({
  container: {
    position: 'absolute',
    bottom: -height,
    zIndex: 1,
    fontSize: 14,
    width,
    opacity: 0,
    backgroundColor: Color.SHARK.value,

    ...Platform.select({
      ios: {
        shadowColor: Color.SHARK_DARKER.value,
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        borderTopWidth: 1,
        borderTopColor: Color.SHARK_DARKER.value,
        elevation: 0,
      },
    }),
  },
  visible: {
    opacity: 1,
  },
});
