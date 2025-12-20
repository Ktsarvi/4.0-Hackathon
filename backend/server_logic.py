import cv2
from ultralytics import YOLO
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()

# 1. Загружаем модель один раз
model = YOLO("yolo11n.pt")

# 2. Открываем камеру глобально, чтобы она не перезапускалась
camera = cv2.VideoCapture(0)

def generate_frames():
    while True:
        # Считываем кадр
        success, frame = camera.read()
        if not success:
            break
        else:
            # 3. Нейросеть обрабатывает кадр
            # stream=True позволяет обрабатывать поток быстрее
            results = model.predict(frame, conf=0.5, verbose=False,classes = [7,39,40,41,55,56,57,58])
            
            # Рисуем аннотации
            annotated_frame = results[0].plot()

            # 4. Кодируем кадр в JPEG
            ret, buffer = cv2.imencode('.jpg', annotated_frame)
            frame_bytes = buffer.tobytes()

            # 5. Формируем поток байтов в формате multipart (понятный браузеру)
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.get("/video_feed")
async def video_feed():
    # Возвращаем поток кадров с правильным медиа-типом
    return StreamingResponse(generate_frames(), 
                             media_type="multipart/x-mixed-replace; boundary=frame")

@app.get("/")
async def index():
    # Простейшая HTML страница для просмотра
    from fastapi.responses import HTMLResponse
    return HTMLResponse('<html><body><h1>YOLO Live Stream</h1><img src="/video_feed" width="800"></body></html>')

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
