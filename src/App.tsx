import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// import Notes from './components/notes';
import NoteBuilder from './components/notes/builder';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Notes /> */}
        <NoteBuilder />
      </SafeAreaView>
    </>
  );
};

export default App;
