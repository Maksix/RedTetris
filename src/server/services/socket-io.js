/* eslint-disable */
const rooms = [];
const Room = require('../classes/Room/Room');
const Player = require('../classes/Player/Player');

module.exports = async (client) => {

  client.on('test', (client) => console.log('here'))

  client.on('REQUEST_TETRAMINOS', (client) => {
    client.emit('GET_TETRAMINOS', [1, 2, 5, 10, 15])
  })
  // const { roomName, playerName } = client.handshake.query;
  // if (!rooms[roomName]) {
  //   rooms[roomName] = new Room(roomName, new Player(playerName, client.id, 'leader'));
  // } else {
  //   rooms[roomName].addPlayer(new Player(playerName, client.id));
  // }
  // console.log(`player ${playerName} joined ${roomName}`);
  // client.join(roomName);
  // client.emit('test', 'hellow');
  // client.on('here', (data) => console.log(data));
  // client.on('disconnecting', () => {
  //   const clientRooms = Object.keys(client.rooms);
  //   console.log(clientRooms);
  // });
};
