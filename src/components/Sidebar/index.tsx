import { Text, TouchableOpacity, View } from 'react-native';

// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  navigateTo: (routeName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navigateTo }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      {/* Adicione mais opções de navegação aqui */}
    </View>
  );
};

export default Sidebar;
