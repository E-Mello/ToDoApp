import { Button, Modal, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';
import { styles } from './styles';

interface TaskModalProps {
    modalVisible: boolean;
    editingTask: { id: number; title: string; description: string } | null;
    newTaskTitle: string;
    newTaskDescription: string;
    closeAndClearModal: () => void;
    saveTask: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
    modalVisible,
    editingTask,
    newTaskTitle,
    newTaskDescription,
    closeAndClearModal,
    saveTask,
}) => {
    return (
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
                                editingTask.title = text;
                            } else {
                                newTaskTitle = text;
                            }
                        }}
                        style={styles.input}
                    />
                    <Text>Descrição:</Text>
                    <TextInput
                        value={editingTask ? editingTask.description : newTaskDescription}
                        onChangeText={text => {
                            if (editingTask) {
                                editingTask.description = text;
                            } else {
                                newTaskDescription = text;
                            }
                        }}
                        style={styles.input}
                    />
                    <View style={styles.modalButtons}>
                        <Button title="Cancelar" onPress={closeAndClearModal} />
                        <Button title={editingTask ? 'Salvar Edição' : 'Criar Tarefa'} onPress={saveTask} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default TaskModal;
