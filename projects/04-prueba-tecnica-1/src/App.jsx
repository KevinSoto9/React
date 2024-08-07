import { useEffect, useState } from "react"
import "./App.css" 

export function App  () {
    const CAT_FACT = "https://catfact.ninja/fact"
    const CAT_SAYS = "https://cataas.com/cat/says/"
    const [fact,setFact] = useState()
    const[imageUrl,setImageUrl] = useState()

    useEffect(() =>{
        fetch(CAT_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)

                const firstWord = fact.split(" ")[0]
                
                    fetch(CAT_SAYS + {firstWord})
                        .then(res => res.json())
                        .then(response => {const {url} = response}) 
                        setImageUrl(url)
        })
    },[])


    return(
        <main className="main">
            <h1>Cats api</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <image src = {`${CAT_SAYS}${imageUrl}`} alt={`Image from the first word from the ${fact}`}/>}
        </main>

    )
}