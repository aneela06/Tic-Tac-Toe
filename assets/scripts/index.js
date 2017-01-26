'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// Variable turn - holds active player
let turn = 'player_x';

// Variable board - holds x's and o's
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Selects all cell Divs from HTML
let cells = document.querySelectorAll('.cell');

let checkO = function(element) {
  if (element === 'o') {
    return true;
  } else {
    return false;
  }
};

let checkX = function(element) {
  if (element === 'x') {
    return true;
  } else {
    return false;
  }
};

let isWinner = function (board,turn) {
  let condition1 = [board[0],board[1],board[2]];
  let condition2 = [board[3],board[4],board[5]];
  let condition3 = [board[6],board[7],board[8]];
  let condition4 = [board[0],board[3],board[6]];
  let condition5 = [board[1],board[4],board[7]];
  let condition6 = [board[2],board[5],board[8]];
  let condition7 = [board[2],board[4],board[6]];
  let condition8 = [board[0],board[4],board[8]];
  let myFunc;

  if (turn === 'player_x') {
    myFunc = checkX;
  } else {
    myFunc = checkO;
  }

  if (condition1.every(myFunc) === true) {
    return true;
  }
  if (condition2.every(myFunc) === true) {
    return true;
  }
  if (condition3.every(myFunc) === true) {
    return true;
  }
  if (condition4.every(myFunc) === true) {
    return true;
  }
  if (condition5.every(myFunc) === true) {
    return true;
  }
  if (condition6.every(myFunc) === true) {
    return true;
  }
  if (condition7.every(myFunc) === true) {
    return true;
  }
  if (condition8.every(myFunc) === true) {
    return true;
  }
  return false;
};

// let cellFilled = function (element) {
//   if (element !== '') {
//     return true;
//   } else {
//     return false;
//   }
// };
// board.every(cellFilled)
let resetBoard = function () {
  turn = 'player_x';
  board = ['', '', '', '', '', '', '', '',''];
};

let placePiece = function (index, turn) {
  if (board[index] === '') {
    if (turn === 'player_x') {
      board[index] = 'x';
      gameOver = isWinner(board,turn);
      if (gameOver === true) {
        alert("You WONNNN!!!!!");
        resetBoard();
        return turn;
      }
      turn = 'player_o';
      return turn;
    } else {
      board[index] = 'o';
      gameOver = isWinner(board,turn);
      if (gameOver === true) {
        alert("You WONNNN!!!!!");
        resetBoard();
        return turn;
      }
      turn = 'player_x';
      return turn;
    }
  }
  return turn;
};

let gameLogic = function () {
  let index = $(this).data('name');
  turn = placePiece(index, turn);
  console.log(board);
};

// Loops through each cell and adds an onClick EventListener
cells.forEach(cell => cell.addEventListener('click', gameLogic));
