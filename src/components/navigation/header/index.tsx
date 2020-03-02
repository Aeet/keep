import React, { SFC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 20,
  },
  action: {
    marginLeft: 25,
  },
});

export const RightActionsContainer: SFC<any> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const HeaderButton: SFC<any> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.action}>
      {children}
    </TouchableOpacity>
  );
};
