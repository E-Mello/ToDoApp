// src/components/Sidebar.tsx

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

// Defina a interface SidebarProps
interface SidebarProps {
  navigateTo: (routeName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navigateTo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('TasksView')}>
        <Text>TasksView</Text>
      </TouchableOpacity>
      {/* Adicione mais opções de navegação aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinhe verticalmente ao topo
    paddingTop: 20,
    paddingLeft: 20,
  },
  // ... outros estilos ...
});

export default Sidebar;
