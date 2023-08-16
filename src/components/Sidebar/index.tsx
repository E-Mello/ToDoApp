import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';

interface SidebarProps {
  navigation: any;
}

const Sidebar: React.FC<SidebarProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Logo Fictícia */}
        <Image
          source={require('../../../assets/logo.png')} // Substitua pelo caminho da sua logo
          style={styles.logo}
        />
        {/* Botão para Fechar a Sidebar */}
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Feather name="x" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />

      {/* Wrap das opções com View para aplicar o espaçamento */}
      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.link}
        >
          <Feather name="home" size={20} color="#333" style={styles.icon} />
          <Text>Página Inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tasks')}
          style={styles.link}
        >
          <Feather name="list" size={20} color="#333" style={styles.icon} />
          <Text>Tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  linkContainer: {
    flex: 1,
    paddingTop: 7,
    gap: 20, // Define o espaçamento entre as opções
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;
