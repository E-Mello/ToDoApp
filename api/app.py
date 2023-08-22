from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import uuid

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}},
     methods=["GET", "POST", "PUT", "DELETE"])

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'abc123#4',
    'database': 'todoApp'
}

mysql = mysql.connector.connect(**db_config)


@app.route('/tasks', methods=['GET'])
def get_tasks():
    show_completed = request.args.get('show_completed', default='false')
    cursor = mysql.cursor(dictionary=True)

    if show_completed == 'true':
        cursor.execute('SELECT * FROM tasks')
    else:
        cursor.execute('SELECT * FROM tasks WHERE completed = false')

    tasks = cursor.fetchall()
    cursor.close()
    return jsonify(tasks)


@app.route('/tasks', methods=['POST'])
def create_task():
    title = request.json['title']
    description = request.json['description']
    task_id = str(uuid.uuid4())  # Gerar UUID
    cursor = mysql.cursor()
    cursor.execute(
        'INSERT INTO tasks (id, title, description) VALUES (%s, %s, %s)', (task_id, title, description))
    mysql.commit()
    cursor.close()
    return jsonify({'message': 'Task created successfully'})


@app.route('/tasks/<string:task_id>', methods=['PUT'])
def update_task(task_id):
    try:
        title = request.json['title']
        description = request.json['description']
        completed = request.json['completed']

        cursor = mysql.cursor()
        cursor.execute('UPDATE tasks SET title = %s, description = %s, completed = %s WHERE id = %s',
                       (title, description, completed, task_id))
        mysql.commit()
        cursor.close()

        return jsonify({'message': 'Task updated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/tasks/<string:task_id>', methods=['DELETE'])
def delete_task(task_id):
    try:
        cursor = mysql.cursor()
        cursor.execute('DELETE FROM tasks WHERE id = %s', (task_id,))
        mysql.commit()
        cursor.close()

        return jsonify({'message': 'Task deleted successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='192.168.1.115', port=5000, debug=True)
