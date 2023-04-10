import { useEffect, useState } from 'react';

type Advice = {
  slip: {
    advice: string;
    id: number;
  };
};

export const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice>({ slip: { advice: '', id: 0 } });

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const json = await response.json();
      setAdvice(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return {
    advice,
    fetchAdvice,
  };
};
