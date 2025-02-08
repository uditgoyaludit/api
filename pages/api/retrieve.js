import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const filePath = path.join('/tmp/', 'api.txt'); // Ensure it's a writable directory on Netlify

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(content); // Send only raw text (NO HTML)
    } catch (err) {
        res.status(404).send('File not found');
    }
}
