import { forEach } from "./";

test("it runs a function for each item", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([1, 2, 3], mockCallback);

  const { calls } = mockCallback.mock;

  expect(calls.length).toEqual(3);
  expect(calls[0][0]).toEqual(1);
  expect(calls[1][0]).toEqual(2);
  expect(calls[2][0]).toEqual(3);
});
