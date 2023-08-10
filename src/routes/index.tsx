import HomeView from '../views/HomeView';
import { NavigationContainer } from '@react-navigation/native';
// src/routes/index.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import TasksView from '../views/TasksView';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa a TasksView

const Drawer = createDrawerNavigator();

const Routes = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <Sidebar navigateTo={props.navigation.navigate} />}>
      <Drawer.Screen name="Home" component={HomeView} />
      <Drawer.Screen name="Tasks" component={TasksView} />  {/* Usando a TasksView */}
      {/* Adicione mais telas aqui */}
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Routes;
