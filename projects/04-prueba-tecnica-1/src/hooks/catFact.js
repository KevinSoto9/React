import { useEffect, useState } from "react";
import { fetchFact } from "../services/fecthFact";

export const useCatFact = () =>{

    const [fact, setFact] = useState("");

    const refresh = () => {
        fetchFact().then(newFact => setFact(newFact))
    }

    useEffect(refresh, [])

    return {fact,refresh}
}
