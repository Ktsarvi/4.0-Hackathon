from inference_sdk import InferenceHTTPClient
import supervision as sv
import cv2

client = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key="KeXPlFT9YrUxgWTzqlkI"
)

video_path = "data/videos/video2.mp4"
cap = cv2.VideoCapture(video_path)

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)

out = cv2.VideoWriter(
    "output.mp4",
    cv2.VideoWriter_fourcc(*"mp4v"),
    fps,
    (width, height)
)

box_annotator = sv.BoxAnnotator()
label_annotator = sv.LabelAnnotator()

while True:
    ret, frame = cap.read()
    if not ret:
        break

    result = client.infer(
    frame,
    model_id="boxdetections-fzo7o/yolo12-toi2r-krio3/1"
)

    detections = sv.Detections.from_inference(result)

    frame = box_annotator.annotate(scene=frame, detections=detections)
    frame = label_annotator.annotate(scene=frame, detections=detections)

    out.write(frame)

cap.release()
out.release()
