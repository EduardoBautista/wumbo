import { compact } from "./";

test("removes null and undefined values", () => {
  const iterable: (0 | 1 | "" | [] | {} | false | null | undefined)[] = [
    0,
    1,
    2,
    "",
    [],
    {},
    false,
    null,
    undefined,
  ];
  const result: NonNullable<(typeof iterable)[number]>[] = compact(iterable);

  expect(result).toEqual([0, 1, 2, "", [], {}, false]);
});
