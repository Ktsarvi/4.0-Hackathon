from fastapi import FastAPI
from fastapi.responses import StreamingResponse, HTMLResponse
from camera import generate_frames

app = FastAPI()

@app.get("/video_feed")
async def video_feed():
    return StreamingResponse(
        generate_frames(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )

@app.get("/")
async def index():
    return HTMLResponse(
        '<html><body><h1>YOLO Live</h1><img src="/video_feed" width="800"></body></html>'
    )