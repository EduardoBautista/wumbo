/**
 * Returns a new iterable with unique values
 *
 * @since 0.0.2
 * @param iterable - The iterable to remove duplicates from
 */
const uniq = <T>(iterable: T[]): T[] => {
  if (iterable instanceof Set) return [...iterable];

  const set = new Set(iterable);

  return [...set];
};

export default uniq;
