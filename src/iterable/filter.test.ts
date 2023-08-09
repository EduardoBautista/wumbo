import { filter } from "./";

test("filters out items if callback returns true", () => {
  const isEven = (n: number) => n % 2 === 0;

  expect(filter([1, 2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
});
