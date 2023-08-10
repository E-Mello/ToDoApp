import HomeView from '../screen/HomeView';
import React from 'react';
import Sidebar from '../components/Sidebar';
import TasksView from '../screen/TasksView';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <Sidebar navigateTo={props.navigation.navigate} />}>
    <Drawer.Screen name="Home" component={HomeView} />
    <Drawer.Screen name="Tasks" component={TasksView} />
    {/* Adicione mais telas aqui */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
