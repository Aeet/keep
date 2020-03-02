import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Navigation from './navigation';
import { Color } from './config';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
        backgroundColor={Color.SHARK.value}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
