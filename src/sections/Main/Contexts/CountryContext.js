import React, { useState, useEffect, createContext } from 'react';

export const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then(json => {
        setCountries(json);
      })
  }, [])

  return (
    <CountryContext.Provider value={[countries, setCountries]}>
      {children}
    </CountryContext.Provider>
  );
}