from ultralytics import YOLO

# Используем предобученную легкую модель YOLOv8n
model = YOLO("yolov8m.pt")

def detect_objects(frame):
    """
    Детекция объектов с YOLOv8.
    Возвращает список словарей: bbox и статус.
    """
    results = model.predict(frame, verbose=False)[0]  # берем первый кадр
    detected = []

    for box in results.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = box
        # Фильтр по уверенности
        if score > 0.3:
            detected.append({
                'bbox': (int(x1), int(y1), int(x2 - x1), int(y2 - y1)),
                'status': 'OK',  # дефекты можно добавить позже
                'class_id': int(class_id)
            })
    return detected
