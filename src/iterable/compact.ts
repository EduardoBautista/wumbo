import forEach from "./forEach";

/**
 * Removes all null and undefined values from an iterable.
 *
 * @since 0.0.2
 * @param iterable - The iterable to remove null and undefined values from
 */
const compact = <T>(iterable: Iterable<T>): NonNullable<T>[] => {
  const filteredIterable = new Array<NonNullable<T>>();

  forEach(iterable, (item) => {
    if (item !== null && item !== undefined) {
      filteredIterable.push(item);
    }
  });

  return filteredIterable;
};

export default compact;
