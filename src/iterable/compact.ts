import filter from "./filter";
import isCompacted from "../lib/isCompacted";

/**
 * Removes all null and undefined values from an iterable.
 *
 * @since 0.0.2
 * @param iterable - The iterable to remove null and undefined values from
 */
const compact = <T>(iterable: Iterable<T>): NonNullable<T>[] => {
  const filteredIterable = filter(
    iterable,
    (item) => item !== null && item !== undefined,
  );

  if (isCompacted(filteredIterable)) {
    return filteredIterable;
  } else {
    return [];
  }
};

export default compact;
