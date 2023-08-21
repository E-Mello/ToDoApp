import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import TaskDetailsModal from './TaskDetailsModal'; // Importe o novo componente
import { styles } from './stylesTaskItem';

interface TaskItemProps {
    task: { id: number; title: string; description: string };
    editTask: () => void;
    deleteTask: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, editTask, deleteTask }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View style={styles.taskItemGroupButton}>
                <TouchableOpacity onPress={editTask} style={{ ...styles.editButton, ...styles.taskItemButton }}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteTask} style={{ ...styles.deleteButton, ...styles.taskItemButton }}>
                    <Text>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openModal} style={{ ...styles.viewButton, ...styles.taskItemButton }}>
                    <Text>View Details</Text>
                </TouchableOpacity>
            </View>
            <TaskDetailsModal visible={modalVisible} task={task} onClose={closeModal} />
        </View>
    );
};

export default TaskItem;
