import { map } from "./";

test("it creates a new array with the return value of the callback", () => {
  const square = (n: number) => n * n;

  expect(map([1, 2, 3, 4, 5, 6], square)).toEqual([1, 4, 9, 16, 25, 36]);
});
