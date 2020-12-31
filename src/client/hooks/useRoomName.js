import { useRouteMatch } from 'react-router-dom';

export const useRoomName = () => {
  const match = useRouteMatch();
  const { room } = match.params;
  return room;
};
