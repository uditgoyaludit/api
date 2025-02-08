import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join('/tmp/', 'api.txt'); // Netlify-compatible storage

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(content); // Sends only raw text, NO HTML
    } catch (err) {
        res.status(404).send('File not found');
    }
}
