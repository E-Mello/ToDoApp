import { Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';
import TaskDetailsModal from './TaskDetailsModal'; // Importe o novo componente
import { styles } from './styles'; // Certifique-se de importar os estilos corretos
import { useState } from 'react'; // Importe o useState

interface TaskItemProps {
    task: { id: number; title: string; description: string };
    editTask: (task: any) => void;
    deleteTask: (taskId: number) => void;
}

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, editTask, deleteTask }) => {
    const [detailsModalVisible, setDetailsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

    const openDetailsModal = () => {
        setDetailsModalVisible(true);
    };

    const closeDetailsModal = () => {
        setDetailsModalVisible(false);
    };

    return (
        <View key={task.id} style={[styles.taskContainer, { backgroundColor: getRandomColor() }]}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <View style={styles.taskButtons}>
                <TouchableOpacity onPress={() => editTask(task)}>
                    <Feather name="edit" size={20} color="#333" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openDetailsModal}>
                    <Feather name="eye" size={20} color="#333" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(task.id)}>
                    <Feather name="trash-2" size={20} color="#333" style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Renderiza o modal de detalhes da tarefa */}
            <TaskDetailsModal task={task} visible={detailsModalVisible} onClose={closeDetailsModal} />
        </View>
    );
};

export default TaskItem;
