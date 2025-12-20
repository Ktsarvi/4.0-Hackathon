from ultralytics import YOLO

model = YOLO("yolo11n.pt")

DEFECT_CLASSES = [7, 39, 40, 41, 55, 56, 57, 58]

def detect(frame):
    results = model.predict(
        frame,
        conf=0.5,
        verbose=False,
        classes=DEFECT_CLASSES
    )

    annotated = results[0].plot()
    detections = []

    for box in results[0].boxes:
        detections.append({
            "object_id": int(box.cls),
            "status": "defect_detected"
        })

    return annotated, detections