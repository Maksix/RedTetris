import { useEffect, useRef } from 'react';

export const useInitialFocus = () => {
  const containerRef = useRef();

  useEffect(() => {
    containerRef?.current?.focus();
  }, []);

  return containerRef;
};
