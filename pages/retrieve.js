import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'public', 'api.txt');
    let content = '';

    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        content = 'No content found.';
    }

    return { props: { content } };
}

export default function RetrievePage({ content }) {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Saved Content</h1>
            <p>{content}</p>
            <a href="/">Go Back</a>
        </div>
    );
}