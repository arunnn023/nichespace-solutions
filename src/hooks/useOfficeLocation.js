// hooks/useOfficeLocation.js
import { useState, useEffect } from 'react';
import { createOfficeMap } from '../utils/createOfficeMap';

export function useOfficeLocation() {
  const [officeMap, setOfficeMap] = useState(new Map());

  useEffect(() => {
    const map = createOfficeMap(); // ✅ Correct usage
    setOfficeMap(map);
  }, []);

  return officeMap;
}

export default useOfficeLocation;
