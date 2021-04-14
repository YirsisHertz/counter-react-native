import {useState} from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (value: number): void => {
    setCounter(counter + value);
  };

  return {counter, handleClick};
};
