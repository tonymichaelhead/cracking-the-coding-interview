/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/

const stringCompression = (string) => {
    
    let returnString = '';
    let currentChar = string[0];
    let counter = 1;
    
    for (let i = 1; i < string.length; i++) {
      if (string[i] === currentChar) {
        counter++;
      } else {
        returnString += currentChar + counter;
        currentChar = string[i];
        counter = 1;
      }
    }
    returnString += currentChar + counter;
    return returnString.length < string.length ? returnString : string;
  }