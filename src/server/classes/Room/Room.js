module.exports = class {
  constructor(roomName, player) {
    this.name = roomName;
    this.players = [player];
    this.status = 'waiting';
  }

  addPlayer(player) {
    this.players.push(player);
  }

  canJoin() {
    return this.status === 'waiting' && this.players.length < 4;
  }
};
