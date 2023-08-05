/**
 * Removes all null and undefined values from an array.
 *
 * @since 0.0.2
 * @param array - The array to remove null and undefined values from
 */
const compact = <T>(array: T[]): T[] =>
  array.filter((item) => item !== null && item !== undefined);

export default compact;
