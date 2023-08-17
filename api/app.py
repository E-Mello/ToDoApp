from flask import Flask, request, jsonify
from flask_cors import CORS  # Importe o módulo CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Permite todas as origens

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

# Outros endpoints para atualizar e excluir tarefas


if __name__ == '__main__':
    app.run(host='172.16.60.55', port=5000, debug=True)
