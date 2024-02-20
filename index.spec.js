const now = require('.');

test('now returns Date object', () => {
  expect(now()).toBeInstanceOf(Date);
});

const mockedNow = new Date('2023-01-01T00:00:00.000+09:00');
describe('mock now', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockedNow);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('now returns now', () => {
    expect(now().getTime()).toBe(mockedNow.getTime());
  });
});

test('now returns realTime', () => {
  expect(now().getTime()).not.toBe(mockedNow.getTime());
});