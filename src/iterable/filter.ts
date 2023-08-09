import { forEach } from "./";

/**
 * Filters an iterable based on a filter function.
 *
 * @since 0.2.0
 * @param iterable
 * @param filterFn
 */
const filter = <T>(
  iterable: Iterable<T>,
  filterFn: (item: T) => boolean,
): T[] => {
  if (Array.isArray(iterable)) return iterable.filter(filterFn);

  const filteredCollection = new Array<T>();

  forEach(iterable, (item) => {
    if (filterFn(item)) {
      filteredCollection.push(item);
    }
  });

  return filteredCollection;
};

export default filter;
