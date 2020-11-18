const Room = require('../classes/Room/Room');
const Player = require('../classes/Player/Player');

const rooms = [];

module.exports = async (client) => {
  console.log('here');
  client.on('OUT_JOIN_ROOM', ({ playerName, roomName }) => {
    console.log(playerName, roomName);
    if (!rooms[roomName]) {
      rooms[roomName] = new Room(roomName, new Player(playerName, client.id, 'leader'));
    } else if (rooms[roomName].canJoin()) {
      rooms[roomName].addPlayer(new Player(playerName, client.id));
    }
    console.log(`player ${playerName} joined ${roomName}`);
    client.join(roomName);
    client.to(roomName).emit('UPDATE_PLAYER_LIST', rooms[roomName].players);
  });
};
