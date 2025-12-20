import mysql.connector
from datetime import datetime

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="inventory_cv"
)

cursor = db.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS detections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    object_id INT,
    status_of_object VARCHAR(50),
    time_detected DATETIME
)
""")
db.commit()

def save_detection(object_id):
    cursor.execute(
        "INSERT INTO detections (object_id, status_of_object, time_detected) VALUES (%s,%s,%s)",
        (object_id, "OK", datetime.now())
    )
    db.commit()