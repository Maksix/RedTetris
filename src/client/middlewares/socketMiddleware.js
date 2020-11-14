/* eslint-disable */
export const socketMiddleware = socket => store => next => action => {
  console.log(`action ${action.type} invoked`);
  console.log(`store is`, store.getState());
  socket.emit('test');
  return next(action);
}
