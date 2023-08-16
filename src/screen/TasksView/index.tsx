import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'; // Importe o estilo do novo arquivo

const TasksView: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<{ id: number; title: string; description: string }[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const [editingTask, setEditingTask] = useState<{ id: number; title: string; description: string } | null>(null);

  const editTask = (task: any) => {
    setEditingTask(task);
    setModalVisible(true);
  };

  const saveEditedTask = () => {
    if (editingTask) {
      const updatedTasks = tasks.map(task =>
        task.id === editingTask.id ? { ...task, title: newTaskTitle, description: newTaskDescription } : task
      );

      setTasks(updatedTasks);
      setEditingTask(null);
      setModalVisible(false);
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };

  const createTask = () => {
    if (newTaskTitle) {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        description: newTaskDescription,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskDescription('');
      setModalVisible(false);
    }
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <View style={styles.noneTasks}><Text>Nenhuma tarefa cadastrada.</Text></View>;
    }

    return tasks.map(task => (
      <View key={task.id} style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <View style={styles.taskButtons}>
          <TouchableOpacity onPress={() => editTask(task)}>
            <Feather name="edit" size={20} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => viewTask(task)}>
            <Feather name="eye" size={20} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(task.id)}>
            <Feather name="trash-2" size={20} color="#333" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  const viewTask = (task: any) => {
    // Implementar a lógica de visualização da tarefa aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.newTaskButton}>
        <Button title="Nova Tarefa" onPress={() => setModalVisible(true)} />
      </View>

      <View style={styles.renderTasks}>
        {renderTasks()}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Feather name="x" size={24} color="#333" />
            </TouchableOpacity>

            {/* Conteúdo do Modal */}
            <Text>Título:</Text>
            <TextInput
              value={editingTask ? editingTask.title : newTaskTitle}
              onChangeText={text => setEditingTask(editingTask ? { ...editingTask, title: text } : null)}
              style={styles.input}
            />
            <Text>Descrição:</Text>
            <TextInput
              value={editingTask ? editingTask.description : newTaskDescription}
              onChangeText={text => setEditingTask(editingTask ? { ...editingTask, description: text } : null)}
              style={styles.input}
            />

            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            <Button title={editingTask ? 'Salvar Edição' : 'Criar Tarefa'} onPress={editingTask ? saveEditedTask : createTask} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TasksView;
