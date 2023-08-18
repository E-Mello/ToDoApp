import { Button, Modal, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

interface TaskModalProps {
    modalVisible: boolean;
    newTaskTitle: string;
    newTaskDescription: string;
    closeAndClearModal: () => void;
    saveTask: () => void;
    setNewTaskTitle: (text: string) => void;
    setNewTaskDescription: (text: string) => void;
    setEditingTask: (task: { id: number; title: string; description: string } | null) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
    modalVisible,
    newTaskTitle,
    newTaskDescription,
    closeAndClearModal,
    saveTask,
    setNewTaskTitle,
    setNewTaskDescription,
    setEditingTask,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeAndClearModal}
        >
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={newTaskTitle}
                    onChangeText={setNewTaskTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={newTaskDescription}
                    onChangeText={setNewTaskDescription}
                />
                <Button title="Save" onPress={saveTask} />
                <Button title="Cancel" onPress={closeAndClearModal} />
            </View>
        </Modal>
    );
};

export default TaskModal;
