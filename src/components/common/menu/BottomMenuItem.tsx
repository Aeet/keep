import React, { SFC } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from './../text/AppText';
import { Color } from './../../../config';

interface BottomMenuItemProps {
  renderIcon?: Function;
  text?: string;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  menuItemWrapper: {
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },
  iconWrapper: {
    marginRight: 20,
  },
});

const BottomMenuItem: SFC<BottomMenuItemProps> = ({
  renderIcon,
  text,
  children,
}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="rgba(255, 255, 255, 0.2)"
      onPress={() => {}}
    >
      <View style={styles.menuItemWrapper}>
        {renderIcon && <View style={styles.iconWrapper}>{renderIcon()}</View>}
        {text ? (
          <AppText color={Color.SILVER_SAND.value} fontSize={18}>
            {text}
          </AppText>
        ) : (
          children
        )}
      </View>
    </TouchableHighlight>
  );
};

export default BottomMenuItem;
