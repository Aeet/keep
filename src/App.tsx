import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Notes from './components/notes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Notes />
      </SafeAreaView>
    </>
  );
};

export default App;
