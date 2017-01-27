'use strict';

// const setAPIOrigin = require('../../lib/set-api-origin');
// const config = require('./config');
//
// $(() => {
//   setAPIOrigin(location, config);
// });

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');
// 2Variable turn - holds active player

let turn = 'player_x';

// 3Variable board - holds x's and o's
//game is always false in the beginning

let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// 1 Selects all cell Divs from HTML

let cells = document.querySelectorAll('.cell');

//if theres an o in index then return o

let checkO = function (element) {
  if (element === 'o') {
    return true;
  } else {
    return false;
  }
};

//if x in index then return x

let checkX = function (element) {
  if (element === 'x') {
    return true;
  } else {
    return false;
  }
};

//check to see if any of these have all x or os

let isWinner = function () {
  let condition1 = [board[0], board[1], board[2]];
  let condition2 = [board[3], board[4], board[5]];
  let condition3 = [board[6], board[7], board[8]];
  let condition4 = [board[0], board[3], board[6]];
  let condition5 = [board[1], board[4], board[7]];
  let condition6 = [board[2], board[5], board[8]];
  let condition7 = [board[2], board[4], board[6]];
  let condition8 = [board[0], board[4], board[8]];
  let myFunc;

  //if the player is x then check x values in each condition

  if (turn === 'player_x') {
    myFunc = checkX;
  } else {
    myFunc = checkO;
  }

  //conditions to meet for each player but if false that means its not all full?

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

//if cells are filled and the element is not empty you keep going?

let cellFilled = function (element) {
  if (element !== '') {
    return true;
  } else {
    return false;
  }
};

board.every(cellFilled);

//reset board if everything works

let resetBoard = function () {
  turn = 'player_x';
  board = ['', '', '', '', '', '', '', '', ''];
};

//the function takes in the place and the turn as long as its empty
//it adds the x value and then changes turns to o,
//then checks if the game is over and if it is
// then reset the board and return the next person's turn.

let placePiece = function (index) {
  if (board[index] === '') {
    if (turn === 'player_x') {
      board[index] = 'x';
      gameOver = isWinner();
      if (gameOver === true) {
        alert('You WONNNN!!!!!');
        resetBoard();
        return turn;
      }

      turn = 'player_o';
      return turn;
    } else if (turn === 'player_o') {
      board[index] = 'o';
      gameOver = isWinner();
      if (gameOver === true) {
        alert('You WONNNN!!!!!');
        resetBoard();
        return turn;
      }

      turn = 'player_x';
      return turn;
    }
  }

  return turn;
};

//2adds the data attributes to each index, the turn is x and the place clicked

let gameLogic = function () {
  let index = $(this).data('name');
  turn = placePiece(index, turn);
  console.log(board);
};

// 1 Loops through each cell and adds an onClick EventListener

cells.forEach(cell => cell.addEventListener('click', gameLogic));

// module.exports = {
//   placePiece,
//   board,
// };

module.exports = {
  board,
  isWinner,
  placePiece,
  resetBoard,
};
