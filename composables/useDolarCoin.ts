

export const useDolarCoin = () => {
    const dolarValue = ref<any>(null);
    const { data, pending, error, refresh } = useFetch<any[]>('https://economia.awesomeapi.com.br/json/daily/USD-BRL/1');
  
    // Assume que data sempre contém pelo menos um item
    dolarValue.value = data.value?.[0] ?? null;
  
    return { dolarValue, pending, error, refresh };
  };