import { Button, StatusBar, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import TaskItem from './TaskItem';
import TaskModal from './TaskModal';
import { styles } from './styles';

const TasksView: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<{ id: number; title: string; description: string }[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState<{ id: number; title: string; description: string } | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://192.168.1.115:5000/tasks');
      const data = await response.json();
      console.log('Fetched tasks:', data);
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
        const response = await fetch('http://192.168.1.115:5000/tasks', {
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
      try {
        console.log('Updating task:', editingTask.id);

        const response = await fetch(`http://192.168.1.115:5000/tasks/${editingTask.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: newTaskTitle,
            description: newTaskDescription,
          }),
        });

        if (response.ok) {
          await fetchTasks();
          closeAndClearModal();
          window.alert(`Tarefa atualizada com sucesso! ${newTaskTitle} ${newTaskDescription}`);

          console.log('Task updated successfully');
        } else {
          console.error('Task update failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      const response = await fetch(`http://192.168.1.115:5000/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Atualiza a lista de tarefas após a exclusão
        await fetchTasks();
      } else {
        console.error('Task deletion failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTitleChange = (text: string) => {
    if (editingTask) {
      setEditingTask({ ...editingTask, title: text });
    } else {
      setNewTaskTitle(text);
    }
  };

  const handleDescriptionChange = (text: string) => {
    if (editingTask) {
      setEditingTask({ ...editingTask, description: text });
    } else {
      setNewTaskDescription(text);
    }
  };


  const renderTasks = () => {
    if (tasks.length === 0) {
      return <View style={styles.noneTasks}><Text>Nenhuma tarefa cadastrada.</Text></View>;
    }

    return tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.newTaskButton}>
        <Button title="Nova Tarefa" onPress={() => setModalVisible(true)} />
      </View>

      <View style={styles.renderTasks}>
        {renderTasks()}
      </View>

      <TaskModal
        modalVisible={modalVisible}
        editingTask={editingTask}
        newTaskTitle={newTaskTitle}
        newTaskDescription={newTaskDescription}
        closeAndClearModal={closeAndClearModal}
        saveTask={editingTask ? saveEditedTask : createTask}
        setNewTaskTitle={setNewTaskTitle}
        setNewTaskDescription={setNewTaskDescription}
        setEditingTask={setEditingTask}
      />
    </View>
  );
};

export default TasksView;
