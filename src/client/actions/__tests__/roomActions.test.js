import { joinRoomError, joinRoom, leaveRoom } from '../roomActions';
import { OUT_JOIN_ROOM, JOIN_ROOM_ERROR, OUT_LEAVE_ROOM } from '../../reducers/types';

describe('room actions', () => {
  test('should create an action to get send join room message', () => {
    const playerName = 'player';
    const roomName = 'Room1';
    const expectedAction = {
      type: OUT_JOIN_ROOM,
      payload: { playerName, roomName },
    };
    expect(joinRoom(playerName, roomName)).toEqual(expectedAction);
  });

  test('should create an action to send join room error', () => {
    const error = 'The room is full';
    const expectedAction = {
      type: JOIN_ROOM_ERROR,
      payload: error,
    };
    expect(joinRoomError(error)).toEqual(expectedAction);
  });

  test('should create an action to send leave room message', () => {
    const roomName = 'Room1';
    const expectedAction = {
      type: OUT_LEAVE_ROOM,
      payload: roomName,
    };
    expect(leaveRoom(roomName)).toEqual(expectedAction);
  });
});
