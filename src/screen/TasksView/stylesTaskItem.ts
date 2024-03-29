import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    taskContainerCompleted: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    taskTitleCompleted: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textDecorationLine: 'line-through',
    },
    taskItemGroupButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 14,
    },
    editButton: {
        marginRight: 5,
    },
    deleteButton: {
        marginRight: 5,
    },
    completeButton: {
        marginRight: 5,
    },
    viewButton: {},
});
