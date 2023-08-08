import { uniq } from "./";

test("returns unique values", () => {
  expect(uniq([1, 2, 3, 4, 5, 5, 5, 5, "5"])).toEqual([1, 2, 3, 4, 5, "5"]);
});
