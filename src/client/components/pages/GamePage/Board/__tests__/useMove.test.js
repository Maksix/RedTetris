// import { useMove } from 'components/pages/GamePage/Board/hooks/useMove';
// import { renderHook, act } from '@testing-library/react-hooks';
// import { boardInitialMock } from 'helpers/boardInitialMock';
// import { figures } from 'helpers/figures';
import { useFakeTimers } from 'sinon';
// import { fireEvent } from '@testing-library/dom';

describe('useMove', () => {
  let clock;
  beforeEach(() => { clock = useFakeTimers(); });
  afterEach(() => { clock.restore(); });

  test('должны сработать события вправо и дважды вниз', async () => {
  //   const setBoard = jest.fn();
  //   const { result } = renderHook(() => useMove(1000, boardInitialMock, setBoard, figures[0]));
  //   const initialOffsets = result.current;
  //   expect(initialOffsets).toStrictEqual({ offsetX: 0, offsetY: undefined });
  //
  //   act(() => {
  //     clock.tick(2000);
  //     fireEvent.keyDown(document, { keyCode: 39 });
  //   });
  //   expect(result.current).toStrictEqual({ offsetX: 1, offsetY: 2 });
  });
  //
  // const cases = [
  //   [0, [39, 39, 37, 37, 39], { offsetX: 1, offsetY: undefined }],
  //   [1, [37, 37, 37, 37, 37], { offsetX: 0, offsetY: undefined }],
  //   [2, [39, 39, 39, 39, 39, 39], { offsetX: 6, offsetY: 1 }],
  //   [100, [], { offsetX: 0, offsetY: 14 }],
  //   [0, [], { offsetX: 0, offsetY: undefined }],
  //   [1, [], { offsetX: 0, offsetY: undefined }],
  // ];
  //
  // test.each(cases)('Ждем %s мс нажимаем %s должны получить %s',
  //   (time, keyPress, expectedOffsets) => {
  //     const setBoard = jest.fn();
  //     const { result } = renderHook(() => useMove(1, boardInitialMock, setBoard, figures[0]));
  //     const initialOffsets = result.current;
  //     expect(initialOffsets).toStrictEqual({ offsetX: 0, offsetY: undefined });
  //
  //     act(() => {
  //       clock.tick(time);
  //       keyPress.forEach((keyCode) => fireEvent.keyDown(document, { keyCode }));
  //     });
  //     expect(result.current).toStrictEqual(expectedOffsets);
  //   });
});
