const notAStringError =
  (funcName, string) =>
    throw Error(`magic-utils: ${funcName} called without string argument: ${string}`)

export const capitalize =
  str =>
    typeof str !== 'string'
      ? notAStringError('slugify', string)
      : `${str.charAt(0).toUpperCase()}${str.substr(1)}`;

export const slugify =
  str =>
    typeof str !== 'string'
      ? notAStringError('slugify', str)
      : str.replace(/[^\w\s]/g, '')
           .toLowerCase()
           .replace(/ /g, '-');
