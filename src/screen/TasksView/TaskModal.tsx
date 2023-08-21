import { Button, Modal, SafeAreaView, SafeAreaViewComponent, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './stylesTaskModal';

interface TaskModalProps {
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

const TaskModal: React.FC<TaskModalProps> = ({
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
            style={styles.modal}
            statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.contentModal}>
                    <View style={styles.textInputGroup}>
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
                    </View>
                    <View style={styles.modalFooter}>
                        <View style={styles.modalButtonGroup}>
                            <TouchableOpacity onPress={saveTask} style={{ ...styles.modalButton, ...styles.modalButtonSave }}>
                                <Text>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeAndClearModal} style={{ ...styles.modalButton, ...styles.modalButtonCancel }}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default TaskModal;
