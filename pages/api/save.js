import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'No content provided' });
    }

    const filePath = path.join('/tmp/', 'api.txt'); // Use /tmp/ for Netlify compatibility

    try {
        fs.writeFileSync(filePath, content, 'utf8');
        return res.status(200).json({ message: 'File saved successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Error saving file', error });
    }
}
