import { keyBy } from "./";

test("creates a Map of an array of objects by a key", () => {
  const collection = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];

  const keyedCollection = keyBy(collection, "id");

  expect(keyedCollection.get(1)).toEqual({ id: 1, name: "foo" });
  expect(keyedCollection.get(2)).toEqual({ id: 2, name: "bar" });
});
