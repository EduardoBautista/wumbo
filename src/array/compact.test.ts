import { compact } from "./";

test("removes null and undefined values", () => {
  expect(compact([0, 1, 2, "", [], {}, false, null, undefined])).toEqual([
    0,
    1,
    2,
    "",
    [],
    {},
    false,
  ]);
});
