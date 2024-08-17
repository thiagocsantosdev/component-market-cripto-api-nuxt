export const useCryptoData = async () => {
    const { data, pending, error, refresh } = await useFetch('https://api.coinlore.net/api/ticker/?id=90,80,48543,58,518', {
      
    });
  
    return { data, pending, error, refresh };
  }