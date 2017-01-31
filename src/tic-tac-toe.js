class TicTacToe {
	constructor() {
		this.field = [[null, null, null], [null, null, null], [null, null, null]];
		this.isXTurn = true;
		this.turnNumber = 0;
	}

	getCurrentPlayerSymbol() {
		return this.isXTurn ? "x" : "o";
	}

	nextTurn(rowIndex, columnIndex) {
		if (this.field[rowIndex][columnIndex] === null) {
			this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
			this.isXTurn = !this.isXTurn;
			this.turnNumber++;
		}
	}

	isFinished() {
		return this.getWinner()!==null||this.noMoreTurns();
	}

	getWinner() {

		for (var i = 0; i < 3; i++) {
			if (this.field[i][1] !== null &&
				this.field[i][0] === this.field[i][1] &&
				this.field[i][1] === this.field[i][2]) {
				return this.field[i][0];
			}
		}

		for (var i = 0; i < 3; i++) {
			if (this.field[1][i] !== null &&
				this.field[0][i] === this.field[1][i] &&
				this.field[1][i] === this.field[2][i]) {
				return this.field[1][i];
			}
		}

		if (this.field[0][0] !== null && this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) {
			return this.field[0][0];
		}

		if (this.field[0][2] !== null && this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) {
			return this.field[0][2];
		}

		return null;
	}

	noMoreTurns() {
		return this.turnNumber == 9;
	}

	isDraw() {
		return this.noMoreTurns() && this.getWinner() === null;
	}

	getFieldValue(rowIndex, colIndex) {
		return this.field[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
