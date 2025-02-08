import { useEffect, useState } from 'react';

export default function RetrievePage() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/api/retrieve')
            .then(response => response.text())
            .then(data => setContent(data))
            .catch(() => setContent('Error retrieving content.'));
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Saved Content</h1>
            <p>{content}</p>
            <a href="/">Go Back</a>
        </div>
    );
}
