/**
 * Creates an object mapping an array of objects by a key.
 *
 * Duplicate values will be ignored.
 *
 * @since 0.0.2
 * @param array
 * @param key
 */
const keyBy = <T>(array: T[], key: keyof T): Map<string, T> => {
  const keyedCollection = new Map();

  array.forEach((item) => {
    if (keyedCollection.get(item[key])) {
      keyedCollection.set(item[key], item);
    }
  });

  return keyedCollection;
};

export default keyBy;
