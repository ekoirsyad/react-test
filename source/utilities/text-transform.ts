/**
 * regex to determined whether a string is only contain consonant
 */
const isConsonant = /^[^aeiou]+$/i;

/**
 * function to transform text to capitalized
 * @param input string to transform
 * @returns string with text transformed
 */
const toCapitalized = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

/**
 * function to transform text to uppercase
 * @param input string to transform
 * @returns string with text transformed
 */
const toUpperCase = (input: string) => {
  return input.toUpperCase();
};

/**
 * function to decide whether to transform text to capitalized or uppercase
 * @param input string to transform
 * @returns string with text transformed
 */
const textTransform = (input: string) => {
  if (input.length < 4 || isConsonant.test(input)) {
    return toUpperCase(input);
  }

  return toCapitalized(input);
};

/**
 *
 * @param input string to be shortened
 * @param length length of string to be returned
 * @returns string with text shortened
 */
const shortenText = (input: string, length: number) => {
  if (input.length > length) {
    return `...${input.substring(input.length - (length - 3), input.length)}`;
  }
  return input;
};

export {toUpperCase, toCapitalized, shortenText};
export default textTransform;
