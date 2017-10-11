/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix
is 0, its entire row and column are set to 0.
*/

// I: an m*n matrix
// O: a matrix that has its entire row and column set to zero if zero is found

const zeroMatrix = (matrix) => {
    const coordinates = [];
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          coordinates.push([i, j]);
        }
      }
    }
    coordinates.forEach(coordinate => {
      convertRowsAndColumnsToZero(matrix, coordinate);
    });
    return matrix;
  }
  
  const convertRowsAndColumnsToZero = (matrix, coordinates) => {
    const i = coordinates[0];
    const j = coordinates[1];
    
    matrix[i].forEach((val, index) => {
      matrix[i][index] = 0;
    });
    matrix.forEach(row => {
      row[j] = 0;
    });
    return matrix;
  }