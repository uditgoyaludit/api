import fs from 'fs';
import path from 'path';

export async function getServerSideProps({ res }) {
    const filePath = path.join(process.cwd(), 'public', 'api.txt');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        content = 'No content found.';
    }

    // Set response headers to return plain text
    res.setHeader('Content-Type', 'text/plain');
    res.end(content);
    return { props: {} }; // No need for props since we're sending raw content
}

export default function RetrievePage() {
    return null; // This page will never render HTML
}
