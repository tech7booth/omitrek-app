import {useEffect, useState} from 'react';

export function useDebounce(value: string, delay = 500) {
  const [text, setText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return text;
}
