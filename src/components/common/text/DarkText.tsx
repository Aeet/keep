import React from 'react';
import { Text } from 'react-native';
import AppText from './AppText';

/** DarkText is used on Darck Backgrounds (the text is not dark) */
export default function DarkText(props: { children: React.ReactNode }) {
  return (
    <AppText>
      <Text style={{ color: '#e8eaed' }}>{props.children}</Text>
    </AppText>
  );
}
