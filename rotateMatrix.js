/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

// I: a n*n matrix
// O: the same matrix, rotated 9 degrees
// Try to do it in place!!

//Linear space complexity
//iterate over the first line
  //for each character,
    //start a new array in a new matrix placing that character in each new array
  // for each additional array in the matrix,
    // iterate over the array, placing the characters in the previously constructed arrays
// return array

// constant space complexity
// iterate over each array in the matrix
  // place each character that the end of each array in the matrix
  // after the character is placed, shift/splice/pop off the character that was placed from the original array containing that letter
// return that array

const rotateMatrix = (matrix) => {
    const newMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (newMatrix[j]) {
          newMatrix[j].push(matrix[i][j]);
        } else {
          newMatrix.push([matrix[i][j]]);
        }
      }  
    }
    return newMatrix;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  console.log(rotateMatrix(matrix));