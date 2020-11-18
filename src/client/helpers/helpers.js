import { v4 } from 'uuid';

export const getAnimationSpeed = () => Math.random() * 3 + 6;
export const getAnimationDelay = () => Math.random() * 3 + 2;
export const getRandomRoomName = () => v4().split('').reverse().join('')
  .substr(0, 5)
  .toUpperCase();
