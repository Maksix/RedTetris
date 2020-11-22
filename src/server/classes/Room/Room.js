module.exports = class {
  constructor(roomName, player) {
    this.name = roomName;
    this.players = [player];
    this.status = 'waiting';
  }

  addPlayer(player) {
    this.players.push(player);
  }

  removePlayer(playerId) {
    const removePlayer = this.players.find((player) => player.id === playerId);
    if (removePlayer) {
      if (removePlayer.role === 'leader' && this.players.length > 1) {
        const newLeader = this.players.find((player) => player.id !== playerId);
        newLeader.updateRole('leader');
      }
      this.players = this.players.filter((player) => player.id !== playerId);
    }
  }

  canJoin() {
    return this.status === 'waiting' && this.players.length < 4;
  }
};
