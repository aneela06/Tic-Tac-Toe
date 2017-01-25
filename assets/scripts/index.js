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

// $(".cell").forEach(addEventListener("click",printer);
let turn = "player_x";
let board = ['','','','','','','','',''];

let cells = document.querySelectorAll('.cell');

let placePiece = function(index,turn){
  if (board[index] === ''){
    if (turn === 'player_x'){
      board[index] = 'x';
      turn = 'player_o';
      return turn;
    } else {
      board[index] = 'o';
      turn = 'player_x';
      return turn;
    }
  }
  return turn;
};

function gameLogic(){
  let index = $(this).data('name');
  turn = placePiece(index,turn);
  console.log(board);
}

cells.forEach(cell => cell.addEventListener('click',gameLogic));
