const isCompacted = <T>(
  iterable: Iterable<T | null | undefined>,
): iterable is NonNullable<T>[] => {
  for (const item of iterable) {
    if (item === null || item === undefined) return false;
  }

  return true;
};

export default isCompacted;
