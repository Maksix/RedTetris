import { useCallback, useEffect } from 'react';

const transp = (array) => array[0].map((col, i) => array.map((row) => row[i]));

// const stateChange = (prevRotate) => (prevRotate >= 3 ? 0 : prevRotate + 1);

export const useRotateFigure = (setFigure) => {
  // const [rotate, setRotate] = useState(0);
  const handleRotate = useCallback((e) => {
    if (e.keyCode === 38) { // ^ arrow
      setFigure((prevFigure) => transp(prevFigure));
    }
  }, [setFigure]);

  useEffect(() => {
    document.addEventListener('keydown', handleRotate);
    return () => window.removeEventListener('keydown', handleRotate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // return rotate;
};
