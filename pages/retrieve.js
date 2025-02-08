import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join('/tmp/', 'api.txt');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        content = 'No content found.';
    }

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(content);
}
