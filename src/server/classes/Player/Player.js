const playerRoles = ['player', 'leader'];

module.exports = class {
  constructor(name, id, role = 'player') {
    this.name = name;
    this.role = role;
    this.id = id;
  }

  updateRole(newRole) {
    if (playerRoles.includes(newRole)) {
      this.role = newRole;
    }
  }
};
