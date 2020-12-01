const angles = [0, 90, 180, 270];
const figures = [...Array(8).keys()];

module.exports = class {
  constructor() {
    this.angle = angles[Math.floor(Math.random() * angles.length)];
    this.figure = figures[Math.floor(Math.random() * figures.length)];
  }
};
