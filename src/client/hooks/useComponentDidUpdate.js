import { useEffect, useRef } from 'react';

const useComponentDidUpdate = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, [deps, func]);
};

export default useComponentDidUpdate;
