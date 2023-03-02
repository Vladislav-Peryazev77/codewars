"use strict";
function chessBoard(rows, columns) {
  let result = [];
  let color;
  
  for ( let i = 0; i < rows; i++) {
    result[i] = [];
    let flag = i % 2 === 0 ? true : false;
    for ( let j = 0; j < columns; j++) {
      if (flag) {
        color = j % 2 === 0 ? result[i].push('O') : result[i].push('X')
      } else {
        color = j % 2 === 0 ? result[i].push('X') : result[i].push('O')
      }
    }
  }
  return result;
}
console.log(chessBoard(6, 4));







