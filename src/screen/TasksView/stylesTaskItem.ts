import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 100,
        gap: 2,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
      },
      taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 8,
      },
      taskItemGroupButton: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        rowGap: 10,
        flexDirection: 'row',
      },
      editButton: {
        backgroundColor: '#3498db',
      },
      deleteButton: {
        backgroundColor: '#e74c3c',
      },
      viewButton: {
        backgroundColor: '#2ecc71',
      },
      taskItemButton: {
        width: 100,
        padding: 8,
        borderRadius: 4,
        marginTop: 4,
        alignItems: 'center',
      },
});