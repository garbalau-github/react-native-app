type Advice = {
  slip: {
    advice: string;
    id: number;
  };
};

export const useAdviceQuery = () => {
  const fetchAdviceByQuery = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice/search/${query}`
      );
      const json = await response.json();
      const queriedAdvices: Advice[] = json.slips;
      return queriedAdvices;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchAdviceByQuery,
  };
};
