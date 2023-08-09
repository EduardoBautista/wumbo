import { forEach } from "./";

/**
 * Creates an object mapping an iterable of objects by a key.
 *
 * Latest value in the iterable will be used in case of duplicates.
 *
 * @since 0.0.2
 * @param iterable
 * @param key
 */
const keyBy = <T>(iterable: T[], key: keyof T): Map<T[keyof T], T> => {
  const keyedCollection = new Map();

  forEach(iterable, (item) => {
    keyedCollection.set(item[key], item);
  });

  return keyedCollection;
};

export default keyBy;
