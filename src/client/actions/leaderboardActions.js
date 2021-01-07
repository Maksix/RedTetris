import {
  OUT_GET_LEADERBOARD,
  OUT_ADD_LEADERBOARD,
  GET_LEADERBOARD,
} from '../reducers/types';

export function sendGetLeaderboard() {
  return {
    type: OUT_GET_LEADERBOARD,
  };
}

export function getLeaderboard(leaderboard) {
  return {
    type: GET_LEADERBOARD,
    payload: leaderboard,
  };
}

export function addLeaderboard(roomName, score) {
  return {
    type: OUT_ADD_LEADERBOARD,
    payload: { roomName, score },
  };
}
