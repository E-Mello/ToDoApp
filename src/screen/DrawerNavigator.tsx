import HomeView from '../screen/HomeView';
import React from 'react';
import Sidebar from '../components/Sidebar';
import TasksView from '../screen/TasksView';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() { 
  const dimensions = useWindowDimensions();
  return (
  <Drawer.Navigator
    initialRouteName='HomeView'
    defaultStatus="closed"
    screenOptions={{
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      
    }}
    drawerContent={(props) => <Sidebar navigateTo={props.navigation.navigate} />}
    >
   
    <Drawer.Screen name="Home" component={HomeView} />
    <Drawer.Screen name="Tasks" component={TasksView} />
    {/* Adicione mais telas aqui */}
  </Drawer.Navigator>
);
}

export default DrawerNavigator;
