export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  //Checks the longest length, through the array.
  inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
  });
  //Puts the longest length into the empty array.
  inputArray.forEach((word: string) => {
    if(word.length === longestLength) {
        longestWords.push(word);
    }
  });

  return longestWords;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));