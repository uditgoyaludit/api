export default function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to My API</h1>
            <p>Choose an action:</p>
            <a href="/save" style={{ marginRight: '20px' }}>Save Content</a>
            <a href="/retrieve">Retrieve Content</a>
        </div>
    );
}