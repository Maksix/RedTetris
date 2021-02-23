import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore, handleBlockRow } from 'actions/gameActions';
import { useRouteMatch } from 'react-router-dom';

const emptyRow = Array(10).fill(null);

export const useDisappearRows = (setBoard) => {
  const [disappearRows, setDisappearRows] = useState([]);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { room } = match.params;

  useEffect(() => {
    // УДАЛИЛИСЬ ЧЕРНЫе
    if (disappearRows.length) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        disappearRows.forEach((ind) => {
          newBoard.splice(ind, 1);
        });
        const newRows = Array(disappearRows.length).fill(emptyRow);
        return ([...newRows, ...newBoard]);
      });
      disappearRows.forEach(() => {
        dispatch(addScore(10));
        dispatch(handleBlockRow(room));
      });
      setDisappearRows([]);
    }
  }, [disappearRows, dispatch, room, setBoard]);
  return ({ setDisappearRows });
};
