const CAT_FACT = "https://catfact.ninja/fact";

export const  fetchFact = async() =>{
    const res = await fetch(CAT_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}