import { Button, Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles'; // Importe o estilo do novo arquivo

const TasksView: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<{ id: number; title: string; description: string }[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const [editingTask, setEditingTask] = useState<{ id: number; title: string; description: string } | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://172.16.60.55:5000/tasks'); // Altere a URL da sua API aqui
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };


  const editTask = (task: any) => {
    setEditingTask(task);
    setNewTaskTitle(task.title);
    setNewTaskDescription(task.description);
    setModalVisible(true);
  };

  const closeAndClearModal = () => {
    setModalVisible(false);
    setEditingTask(null);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const createTask = async () => {
    if (newTaskTitle) {
      try {
        const response = await fetch('http://172.16.60.55:5000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTaskTitle, description: newTaskDescription }),
        });

        if (response.ok) {
          await fetchTasks();
          closeAndClearModal();
        }
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }
  };

  const saveEditedTask = async () => {
    if (editingTask) {
      //
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      // Implementar a lógica de exclusão da tarefa aqui
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <View style={styles.noneTasks}><Text>Nenhuma tarefa cadastrada.</Text></View>;
    }

    return tasks.map(task => (
      <View key={task.id} style={[styles.taskContainer, { backgroundColor: getRandomColor() }]}>
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
        onRequestClose={closeAndClearModal}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</Text>
            <TouchableOpacity onPress={closeAndClearModal} style={styles.closeButton}>
              <Feather name="x" size={24} color="#333" />
            </TouchableOpacity>

            {/* Conteúdo do Modal */}
            <Text>Título:</Text>
            <TextInput
              value={editingTask ? editingTask.title : newTaskTitle}
              onChangeText={text => {
                if (editingTask) {
                  setEditingTask({ ...editingTask, title: text });
                } else {
                  setNewTaskTitle(text);
                }
              }}
              style={styles.input}
            />
            <Text>Descrição:</Text>
            <TextInput
              value={editingTask ? editingTask.description : newTaskDescription}
              onChangeText={text => {
                if (editingTask) {
                  setEditingTask({ ...editingTask, description: text });
                } else {
                  setNewTaskDescription(text);
                }
              }}
              style={styles.input}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={closeAndClearModal} />
              <Button title={editingTask ? 'Salvar Edição' : 'Criar Tarefa'} onPress={editingTask ? saveEditedTask : createTask} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default TasksView;


