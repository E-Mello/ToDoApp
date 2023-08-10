import { StyleSheet, Text, View } from 'react-native';

// src/views/TasksView.tsx
import React from 'react';

const TasksView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      {/* Aqui você pode adicionar a lógica e componentes para exibir as tarefas */}
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
});

export default TasksView;
