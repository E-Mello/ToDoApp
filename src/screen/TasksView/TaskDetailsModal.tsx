import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import React from 'react';
import { styles } from './styles';

interface TaskDetailsModalProps {
    task: { id: number; title: string; description: string };
    visible: boolean;
    onClose: () => void;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ task, visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            style={styles.modal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{task.title}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Feather name="x" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.taskDescription}>{task.description}</Text>
                </View>
            </View>
        </Modal>
    );
};

export default TaskDetailsModal;
