/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

// I: a n*n matrix
// O: the same matrix, rotated 90 degrees
// Try to do it in place!!

const rotateMatrix = (matrix) => {
    
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j].push(matrix[i].shift());
    }  
  }
  return matrix;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

console.log(rotateMatrix(matrix));