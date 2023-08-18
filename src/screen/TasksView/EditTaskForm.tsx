import { Button, Modal, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

interface EditTaskFormProps {
    modalVisible: boolean;
    editingTask: { id: number; title: string; description: string } | null;
    newTaskTitle: string;
    newTaskDescription: string;
    closeAndClearModal: () => void;
    saveTask: () => void;
    setNewTaskTitle: (text: string) => void;
    setNewTaskDescription: (text: string) => void;
    setEditingTask: (task: { id: number; title: string; description: string } | null) => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
    modalVisible,
    editingTask,
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

export default EditTaskForm;
