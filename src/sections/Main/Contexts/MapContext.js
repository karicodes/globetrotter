import React, { useState, createContext } from 'react';

export const MapContext = createContext();

export function MapProvider({ children }) {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [bucketlistCountries, setBucketlistCountries] = useState([]);

  return (
    <MapContext.Provider value={{
      visited: [visitedCountries, setVisitedCountries],
      bucketlist: [bucketlistCountries, setBucketlistCountries]
    }}>
      {children}
    </MapContext.Provider>
  );
}