import { useState, useEffect } from 'react';

export const useLocalStorage = name => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(name)) || [];
  });

  useEffect(() => {
    const pars = JSON.parse(localStorage.getItem(name)) || [];
    if (!state.map(item => item.name).includes(pars.map(item => item.name))) {
      localStorage.setItem(name, JSON.stringify(state));
    }
  }, [state, name]);

  return [state, setState];
};
