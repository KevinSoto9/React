import "./App.css";
import { useCatFact } from "./hooks/catFact.js";
import { useCatImage } from "./hooks/catImage.js";

export function App() {
    const { fact, refresh } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    
    const handleClick = async () => {
        refresh()
      }

    return (
        <main className="main">
            <h1>Cats API</h1>

            <button onClick={handleClick}>Get a new Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Cat with the first word from the cat fact`} />}
        </main>
    );
}
