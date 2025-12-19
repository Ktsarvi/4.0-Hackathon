import mysql.connector
from datetime import datetime

class Database:
    def __init__(self):
        self.conn = mysql.connector.connect(
            host='localhost',
            database='inventory_cv',
            user='root',
            password='root'
        )
        self.cursor = self.conn.cursor()

    def insert_object(self, object_id, status, position=None, additional_info=None):
        query = """
        INSERT INTO objects (object_id, status, detected_at, position, additional_info)
        VALUES (%s, %s, %s, %s, %s)
        """
        self.cursor.execute(query, (object_id, status, datetime.now(), position, additional_info))
        self.conn.commit()

    def fetch_objects(self):
        self.cursor.execute("SELECT * FROM objects")
        return self.cursor.fetchall()
