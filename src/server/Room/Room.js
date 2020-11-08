module.exports = class {
  constructor(roomName, player) {
    this.name = roomName;
    this.players = [player];
  }

  addPlayer(player) {
    this.players.push(player);
  }
};
