export const listToString = (array: Array<string>): string =>
  array.map((elt) => elt).join(', ');

export const capitalizeWord = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
