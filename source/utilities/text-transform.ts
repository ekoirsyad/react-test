/**
 * regex to determined whether a string is only contain consonant
 */
const isConsonant = /^[^aeiou]+$/i;

/**
 * function to transform text to capitalized
 * @param input string to transform
 * @returns string with text transformed
 */
function toCapitalized(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * function to transform text to uppercase
 * @param input string to transform
 * @returns string with text transformed
 */
function toUpperCase(input: string) {
  return input.toUpperCase();
}

/**
 * function to decide whether to transform text to capitalized or uppercase
 * @param input string to transform
 * @returns string with text transformed
 */
function textTransform(input: string) {
  if (input.length < 4 || isConsonant.test(input)) {
    return toUpperCase(input);
  }

  return toCapitalized(input);
}

export {toUpperCase, toCapitalized};
export default textTransform;
