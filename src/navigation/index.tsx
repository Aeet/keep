import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from './../components/notes';
import NoteBuilder from './../components/notes/builder';
import { Color } from './../config';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Notes"
        screenOptions={({ route }: any): any => ({
          title: null,
          headerStyle: {
            backgroundColor: route.params?.backgroundColor ?? Color.SHARK.value,
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            borderWidth: 0,
            elevation: 0,
          },
          headerTintColor: Color.SILVER_SAND.value,
          headerBackTitleVisible: false,
        })}
      >
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoteBuilder"
          component={NoteBuilder}
          initialParams={{ backgroundColor: Color.SHARK.value }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
