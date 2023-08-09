/**
 * Loops through an iterable and calls a function for each item.
 *
 * @since 0.2.0
 * @param iterable
 * @param forEachFn
 */
const forEach = <T>(
  iterable: Iterable<T>,
  forEachFn: (item: T) => void,
): void => {
  for (const item of iterable) {
    forEachFn(item);
  }
};

export default forEach;
