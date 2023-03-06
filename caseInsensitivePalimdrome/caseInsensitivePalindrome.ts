//In this exercise you are checking to see if the string were reversed would it give the same result.

export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const originalLowerCase = inputString.toLowerCase()
    const reversedWord = originalLowerCase.split('').reverse().join('');

    return originalLowerCase === reversedWord;
}  

 console.log(isCaseInsensitivePalindrome('AaBaa'));
 console.log(isCaseInsensitivePalindrome('abac'));