import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import NoteBuilder from './../components/notes/builder';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Color } from './../config';
import AppText from './../components/common/text/AppText';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const extractPropsForRoutes = (props: any, routes: Array<String>) => {
  const { state } = props;
  const { index } = state;

  const currentRoute = state.routeNames[index];

  const extractedRouteNames = state.routeNames.filter(
    (route: string) => routes.indexOf(route) !== -1,
  );
  const extractedRoutes = state.routes.filter(
    (route: any) => routes.indexOf(route.name) !== -1,
  );

  const extractedIndex = extractedRouteNames.indexOf(currentRoute);

  const extractedState = {
    ...state,
    routeNames: extractedRouteNames,
    routes: extractedRoutes,
    index: extractedIndex,
  };

  return { ...props, state: extractedState };
};

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => (
          <AppText fontSize={22} fontWeight="600">
            Aeet Keep
          </AppText>
        )}
        onPress={() => {}}
      />
      <DrawerItemList {...extractPropsForRoutes(props, ['notes', 'notes2'])} />
      <View style={styles.drawerContentSeparater} />
      <DrawerItemList {...extractPropsForRoutes(props, ['builder'])} />
      <View style={styles.drawerContentSeparater} />
    </DrawerContentScrollView>
  );
};

const drawerItemIcon = (icon: string, lib: string) => ({ focused }: any) => {
  let Icon = MIcon;

  switch (lib) {
    case 'MaterialCommunityIcons':
      Icon = MIcon;
      break;
  }
  return (
    <Icon
      name={icon}
      size={30}
      color={focused ? Color.ATHENS_GRAY.value : Color.SILVER_SAND.value}
      style={styles.drawerItemIcon}
    />
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={styles.drawer}
      drawerContent={DrawerContent}
      drawerContentOptions={{
        activeTintColor: Color.ATHENS_GRAY.value,
        inactiveTintColor: Color.ATHENS_GRAY.value,
        activeBackgroundColor: Color.JUDGE_GRAY.value,
        itemStyle: {
          marginLeft: 0,
          borderRadius: 90,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          marginTop: 0,
          marginBottom: 2,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
      }}
    >
      <Drawer.Screen
        name="notes"
        component={StackNavigator}
        options={{
          drawerLabel: 'Notes',
          drawerIcon: drawerItemIcon(
            'lightbulb-outline',
            'MaterialCommunityIcons',
          ),
        }}
      />
      <Drawer.Screen
        name="notes2"
        component={StackNavigator}
        options={{
          drawerLabel: 'Notes 2',
          drawerIcon: drawerItemIcon(
            'lightbulb-outline',
            'MaterialCommunityIcons',
          ),
        }}
      />
      <Drawer.Screen
        name="builder"
        component={NoteBuilder}
        options={{
          drawerLabel: 'Reminders',
          drawerIcon: drawerItemIcon('bell-outline', 'MaterialCommunityIcons'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: Color.SHARK.value,
    width: Dimensions.get('window').width * (4 / 5),
  },
  drawerContentSeparater: {
    backgroundColor: Color.GRAY.value,
    height: 0.8,
    marginTop: 16,
    marginBottom: 16,
  },
  drawerItemIcon: {
    marginLeft: 15,
  },
});
