import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleBlockRow } from 'actions/gameActions';
import { useRouteMatch } from 'react-router-dom';

const emptyRow = Array(10).fill(null);

export const useDisappearRows = (setBoard) => {
  const [disappearRows, setDisappearRows] = useState([]);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { room } = match.params;

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
      disappearRows.forEach(() => dispatch(handleBlockRow(room)));
      setDisappearRows([]);
    }
  }, [disappearRows, dispatch, room, setBoard]);
  return ({ setDisappearRows });
};
