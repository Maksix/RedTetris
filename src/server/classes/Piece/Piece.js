const rotate = require('matrix-rotate');

const figure1 = [
  ['blue', 'dark_blue', null],
  ['dark_blue', null, null],
  ['blue', null, null],
];

const figure2 = [
  [null, null, 'yellow', null],
  [null, null, 'dark_yellow', null],
  [null, null, 'yellow', null],
  [null, null, 'dark_yellow', null],
];

const figure3 = [
  ['red', 'dark_red'],
  ['dark_red', 'red'],
];

const figure4 = [
  ['orange', null, null],
  ['dark_orange', null, null],
  ['orange', 'dark_orange', null],
];

const figure5 = [
  [null, 'green', 'dark_green'],
  ['green', 'dark_green', null],
  [null, null, null],
];

const figure6 = [
  ['green', 'dark_green', null],
  [null, 'green', 'dark_green'],
  [null, null, null],
];

const figure7 = [
  [null, 'purple', null],
  ['purple', 'dark_purple', 'purple'],
  [null, null, null],
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const figures = [figure1, figure2, figure3, figure4, figure5, figure6, figure7];

module.exports = class {
  constructor(figureNumber = -1, initialAngleCounter = -1) {
    this.figure = figureNumber === -1 ? figures[getRandomNumber(7)] : figures[figureNumber];
    this.rotateFigure(initialAngleCounter);
  }

  rotateFigure(initialAngleCounter) {
    let angleCounter = initialAngleCounter === -1 ? getRandomNumber(4) : initialAngleCounter;
    while (angleCounter) {
      rotate(this.figure);
      angleCounter -= 1;
    }
  }
};
