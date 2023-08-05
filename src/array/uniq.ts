/**
 * Returns a new array with unique values
 *
 * @since 0.0.2
 * @param array - The array to remove duplicates from
 */
const uniq = <T>(array: T[]): T[] => {
  const set = new Set(array);
  return [...set];
};

export default uniq;
