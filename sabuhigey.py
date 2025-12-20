import cv2
import supervision as sv
from inference_sdk import InferenceHTTPClient

# 1. Setup Client
CLIENT = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="KeXPlFT9YrUxgWTzqlkI"
)

model_id = "yolo12-toi2r-krio3/1"
video_path = "C:/Users/ufml/Downloads/Corrugated Boxes_ How It’s Made Step By Step Process _ Georgia-Pacific (online-video-cutter.com).mp4" # Or use 0 for webcam

cap = cv2.VideoCapture(video_path)

box_annotator = sv.BoxAnnotator()
label_annotator = sv.LabelAnnotator()

FRAME_SKIP = 3  
frame_count = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    frame_count += 1
    
    # Only send to API every X frames to save bandwidth/latency
    if frame_count % FRAME_SKIP == 0:
        # INFERENCE: Pass the 'frame' (numpy array) directly to avoid saving to disk
        result = CLIENT.infer(frame, model_id=model_id)
        detections = sv.Detections.from_inference(result)

        # ANNOTATE
        frame = box_annotator.annotate(scene=frame, detections=detections)
        frame = label_annotator.annotate(scene=frame, detections=detections)

    cv2.imshow("Real-Time Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
