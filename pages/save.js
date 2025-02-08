import { useState } from 'react';

export default function SavePage() {
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            });

            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            setMessage('Error saving file.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Save Content</h1>
            <form onSubmit={handleSave}>
                <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    rows="5" cols="50"
                />
                <br />
                <button type="submit">Save</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}