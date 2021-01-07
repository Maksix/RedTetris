const fs = require('fs');
const { OUT_GET_LEADERBOARD, GET_LEADERBOARD, OUT_ADD_LEADERBOARD } = require('./types');

const onAddLeaderboard = (socket, io, rooms) => {
  socket.on(OUT_ADD_LEADERBOARD, ({ roomName, score }) => {
    const currentRoom = rooms.find((room) => room.name === roomName);
    if (currentRoom) {
      const { name } = currentRoom.findPlayer(socket.id);
      const path = 'src/server/public/leaderboard.json';
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
        }
        const leaderboard = JSON.parse(data.toString());
        const json = JSON.stringify([...leaderboard, { name, score }]);
        fs.writeFile(path, json, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    }
  });
};

const onGetLeaderBoard = (socket) => {
  socket.on(OUT_GET_LEADERBOARD, () => {
    const path = 'src/server/public/leaderboard.json';
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      const leaderboard = JSON.parse(data.toString());
      const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
      socket.emit(GET_LEADERBOARD, sortedLeaderboard);
    });
  });
};

module.exports = {
  onAddLeaderboard,
  onGetLeaderBoard,
};
