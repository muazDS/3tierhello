from flask import Flask
import mysql.connector

app = Flask(__name__)

# Database connection configuration
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="3tierhello"
)

@app.route('/')
def show_users():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    user_list = ""
    for user in users:
        user_list += f"ID: {user[0]}, Name: {user[1]}, Email: {user[2]}<br>"
    return user_list

if __name__ == '__main__':
    app.run(host='172.22.0.2', port=5000)










#from flask import Flask

#app = Flask(__name__)

#@app.route('/')
#def hello_world():
#    return 'Hello, World!'

#if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=5000)
