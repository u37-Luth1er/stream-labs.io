export default function MoviePlayer() {
    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            overflow: 'hidden', 
            margin: 0, // Remover margens
            padding: 0 // Remover preenchimento
        }}>
            <iframe
                src="https://viewplayer.online/filme/tt3152592?imdb"
                style={{
                    width: '100%', 
                    height: '100%', 
                    border: 'none', // Remover bordas do iframe
                    display: 'block' // Evitar espaços em branco ao redor do iframe
                }}
                allowFullScreen
            />
        </div>
    );
}
