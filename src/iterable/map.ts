import { forEach } from "./";

/**
 * Creates a new array with the results of calling a provided function on every
 * item in an iterable.
 *
 * @since 0.2.0
 * @param iterable
 * @param mapFn
 */
const map = <T, R>(iterable: Iterable<T>, mapFn: (item: T) => R): R[] => {
  const filteredCollection = new Array<R>();

  forEach(iterable, (item) => {
    filteredCollection.push(mapFn(item));
  });

  return filteredCollection;
};

export default map;
