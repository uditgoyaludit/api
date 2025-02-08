import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join('/tmp/', 'api.txt'); // Using /tmp/ for Netlify compatibility

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(content); // Directly returning raw text, no JSON or HTML
    } catch (err) {
        res.status(404).send('File not found');
    }
}
