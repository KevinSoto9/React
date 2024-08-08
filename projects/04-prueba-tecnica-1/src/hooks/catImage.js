import { useEffect, useState } from 'react';

const CAT_SAYS = 'https://cataas.com';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ')[0];
    const url = `${CAT_SAYS}/cat/says/${firstWord}`;
    
    setImageUrl(url);
  }, [fact]);

  return { imageUrl };
}
