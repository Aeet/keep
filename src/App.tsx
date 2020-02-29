import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// import Notes from './components/notes';
import NoteBuilder from './components/notes/builder';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Notes /> */}
        <NoteBuilder />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
