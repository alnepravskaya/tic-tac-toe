
const TicTacToe = require('./tic-tac-toe.js');
let game;
game = new TicTacToe();
game.nextTurn(2, 1)
console.log(game.getWinner())

game.nextTurn(2, 0)
console.log(game.getWinner())

game.nextTurn(2, 1)
console.log(game.getWinner())

game.nextTurn(1, 2)
console.log(game.getWinner())

game.nextTurn(0, 0)
console.log(game.getWinner())

game.nextTurn(2, 1)
console.log(game.getWinner())

game.nextTurn(1, 1)
console.log(game.getWinner())

game.nextTurn(1, 1)
console.log(game.getWinner())

game.nextTurn(1, 0)
console.log(game.getWinner())