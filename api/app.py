from flask import Flask, request, jsonify
from flask_cors import CORS  # Importe o módulo CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}},
     methods=["GET", "POST", "PUT", "DELETE"])  # Permite todas as origens

# Configurações do banco de dados
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'abc123#4',
    'database': 'todoApp'
}

mysql = mysql.connector.connect(**db_config)


@app.route('/tasks', methods=['GET'])
def get_tasks():
    cursor = mysql.cursor(dictionary=True)
    cursor.execute('SELECT * FROM tasks')
    tasks = cursor.fetchall()
    cursor.close()
    return jsonify(tasks)


@app.route('/tasks', methods=['POST'])
def create_task():
    title = request.json['title']
    description = request.json['description']
    cursor = mysql.cursor()
    cursor.execute(
        'INSERT INTO tasks (title, description) VALUES (%s, %s)', (title, description))
    mysql.commit()
    cursor.close()
    return jsonify({'message': 'Task created successfully'})


@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    print(f"Updating task {task_id}")
    try:
        title = request.json['title']
        description = request.json['description']

        cursor = mysql.cursor()
        cursor.execute('UPDATE tasks SET title = %s, description = %s WHERE id = %s',
                       (title, description, task_id))
        mysql.commit()
        cursor.close()

        return jsonify({'message': 'Task updated successfully'})
    except Exception as e:
        print(f"Error updating task: {e}")
        return jsonify({'error': str(e)}), 500


@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    try:
        cursor = mysql.cursor()
        cursor.execute('DELETE FROM tasks WHERE id = %s', (task_id,))
        mysql.commit()
        cursor.close()

        return jsonify({'message': 'Task deleted successfully'})
    except Exception as e:
        print(f"Error deleting task: {e}")
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='192.168.1.115', port=5000, debug=True)
