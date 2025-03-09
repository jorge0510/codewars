
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


const solution = (str) => (str.split('').length % 2 === 1 ? `${str}_` : str).match(/.{1,2}/g) || [];