/**
 * Creates an object mapping an array of objects by a key.
 *
 * Latest value in the array will be used in case of duplicates.
 *
 * @since 0.0.2
 * @param array
 * @param key
 */
const keyBy = <T>(array: T[], key: keyof T): Map<T[keyof T], T> => {
  const keyedCollection = new Map();

  array.forEach((item) => {
    keyedCollection.set(item[key], item);
  });

  return keyedCollection;
};

export default keyBy;
