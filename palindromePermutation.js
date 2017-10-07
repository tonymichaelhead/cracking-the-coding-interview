/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin drome. A palindrome is a word or phrase that is the same  forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
*/

// Recursive function that spins up all permutations and checks to see if palindrome
const isPalindromePermutation = (string) => {
    const hist = {};
    let oddCount = 0;
    
    string.split('').forEach(char => {
      if (hist[char]) {
        hist[char]++;
      } else {
        hist[char] = 1;
      }
    });
    
    for (let char in hist) {
      if (hist[char] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount <= 1;
  }