import cv2
from modules.detection import detect_objects
from modules.tracking import Tracker
from modules.database import Database

db = Database()
tracker = Tracker()

cap = cv2.VideoCapture("data/videos/video2.mp4")

while True:
    ret, frame = cap.read()
    if not ret:
        break

    detected_objects = detect_objects(frame)

    for obj in detected_objects:
        obj_id = tracker.assign_id(obj)
        db.insert_object(obj_id, obj['status'], position=str(obj['bbox']))

        # Рисуем bbox и ID на кадре
        x, y, w, h = obj['bbox']
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        cv2.putText(frame, f"{obj_id}:{obj['status']}", (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

    cv2.imshow("YOLOv8 Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
