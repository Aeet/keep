import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Navigation from './navigation';
import { Color } from './config';
import { NoteProvider } from './store/note';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
        backgroundColor={Color.SHARK.value}
      />
      <NoteProvider>
        <Navigation />
      </NoteProvider>
    </SafeAreaView>
  );
};

export default App;
