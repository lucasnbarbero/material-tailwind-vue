import objectsToArray from "./objectsToArray";

function objectsToString(object: Record<string, any>): string {
  return objectsToArray(object).join(" ");
}

export default objectsToString;
