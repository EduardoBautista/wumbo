import { compact } from "./";

type TestType = number | string | [] | {} | false | null | undefined;

test("removes null and undefined values", () => {
  const iterable: TestType[] = [0, 1, 2, "", [], {}, false, null, undefined];
  const result: NonNullable<TestType[][number]>[] = compact(iterable);

  expect(result).toEqual([0, 1, 2, "", [], {}, false]);
});

test("removes null and undefined values from Set", () => {
  const iterable: Set<number | string | [] | {} | false | null | undefined> =
    new Set([0, 1, 2, "", [], {}, false, null, undefined]);
  const result: NonNullable<TestType[][number]>[] = compact(iterable);

  expect(result).toEqual([0, 1, 2, "", [], {}, false]);
});
