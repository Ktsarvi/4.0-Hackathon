export default function VideoPlayer() {
  return (
    <video 
      src="/api/video" 
      controls 
      width={800} 
      height={500}
      className="rounded-lg shadow-lg"
    >
      Your browser does not support the video tag.
    </video>
  );
}