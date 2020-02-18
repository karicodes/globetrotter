import React, { useState, createContext } from 'react';

export const MapContext = createContext();

export function MapProvider({ children }) {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [bucketlistCountries, setBucketlistCountries] = useState([]);

  console.log(visitedCountries);
  console.log(bucketlistCountries);
  
  return (
    <MapContext.Provider value={{
      visited: [visitedCountries, setVisitedCountries],
      bucketlist: [bucketlistCountries, setBucketlistCountries]
    }}>
      {children}
    </MapContext.Provider>
  );
}