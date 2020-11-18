module.exports = class {
  constructor(name, id, role = 'player') {
    this.name = name;
    this.role = role;
    this.id = id;
  }
};
