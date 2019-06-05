export const createTestIds = <T extends object>(
  name: string,
  idMap: T
): Record<keyof T, string> => {
  return Object.entries(idMap).reduce(
    (prev, [key, value]) => {
      prev[key] = `${name}_${value}`;
      return prev;
    },
    { ...idMap } as any
  );
};

export const testIdProp = 'data-testid';

export const getTestProps = (id: string) => {
  return {
    [testIdProp]: id
  };
};
