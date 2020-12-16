import { useEffect, useState } from 'react';

const emptyRow = Array(10).fill(null);

export const useDisappearRows = (setBoard) => {
  const [disappearRows, setDisappearRows] = useState([]);

  useEffect(() => {
    if (disappearRows.length) {
      setBoard((prevBpard) => {
        const newBoard = [...prevBpard];
        disappearRows.forEach((ind) => {
          newBoard.splice(ind, 1);
        });
        const newRows = Array(disappearRows.length).fill(emptyRow);
        return ([...newRows, ...newBoard]);
      });
      setDisappearRows([]);
      console.log('set action update board, score points');
    }
  }, [disappearRows, setBoard]);
  return ({ setDisappearRows });
};
