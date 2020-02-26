import React from 'react';
import { Text } from 'react-native';
import AppText from './AppText';

/** LightText is used on Light Backgrounds (the text is not light) */
export default function LightText(props: { children: React.ReactNode }) {
  return (
    <AppText>
      <Text style={{ color: '#202124' }}>{props.children}</Text>
    </AppText>
  );
}
