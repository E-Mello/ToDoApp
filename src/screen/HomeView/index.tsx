import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

// src/views/HomeView.tsx


const HomeView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={styles.description}>Bem-vindo à página inicial do aplicativo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeView;
