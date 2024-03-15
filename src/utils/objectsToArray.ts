type NestedObject = Record<string, any>;

function objectsToArray(object: NestedObject): string[] {
  let result: string[] = [];

  Object.values(object).forEach((value: any) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null
    ) {
      result = [...result, ...objectsToArray(value)];
    }

    return undefined;
  });

  return result;
}

export default objectsToArray;
