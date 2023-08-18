import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

interface TaskItemProps {
    task: { id: number; title: string; description: string };
    editTask: () => void;
    deleteTask: () => void;
    saveEditedTask: () => void; // Adicione esta propriedade
}

const TaskItem: React.FC<TaskItemProps> = ({ task, editTask, deleteTask, saveEditedTask }) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <TouchableOpacity onPress={editTask} style={styles.editButton}>
                <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteTask} style={styles.deleteButton}>
                <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={saveEditedTask} style={styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TaskItem;
