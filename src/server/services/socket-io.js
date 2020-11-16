/* eslint-disable */

const rooms = [];
const Room = require('../classes/Room/Room');
const Player = require('../classes/Player/Player');

module.exports = async (client) => {

  client.on('OUT_JOIN_ROOM', ({playerName, roomName}) => {
    console.log(playerName, roomName);
    if (!rooms[roomName]) {
      rooms[roomName] = new Room(roomName, new Player(playerName, client.id, 'leader'));
    } else {
      rooms[roomName].addPlayer(new Player(playerName, client.id));
    }
    console.log(`player ${playerName} joined ${roomName}`);
    client.join(roomName);
  })
};
