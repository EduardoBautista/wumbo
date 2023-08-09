import filter from "./filter";

/**
 * Removes all null and undefined values from an iterable.
 *
 * @since 0.0.2
 * @param iterable - The iterable to remove null and undefined values from
 */
const compact = <T>(iterable: Iterable<T>): T[] =>
  filter(iterable, (item) => item !== null && item !== undefined);

export default compact;
