import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('http://your-python-server.com/video');
    const buffer = await response.arrayBuffer();
    
    res.setHeader('Content-Type', 'video/mp4');
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
}