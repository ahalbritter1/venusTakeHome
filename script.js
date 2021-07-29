/**
 * Board
 */
const boardSquares = [0, 1, 2, 3, 4, 5, 6, 8]

/**
 * Winning Square Placements
 */
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] 

/*
0, 1, 2
3, 4, 5
6, 7, 8
*/

/**
 * Functions 
 */

const functions = {
    // Player X must go first
    firstPlayer: (player) => {
        if(player === 'x'){
            return true
        } else {
            return false
        }
    },

    // Removes the possibility to place X or O on square that is already used
    moveTracker: (squareNum, lastPlayer, currentPlayer) => {
        const boardCopy = [...boardSquares];
        const indexOfSquareNum = boardCopy.indexOf(squareNum);
        if(boardCopy.includes(squareNum) && lastPlayer !== currentPlayer){
            boardCopy.splice(indexOfSquareNum, 1)
            return true
        } else return false
    },

    // Checks if placed squares for player equal winning combination
    checkForWinner: (nums, currentPlayer) => {
        let winner = "Game In Progress";
        const sortedNums = nums.sort((a,b) => a - b)
        winningCombos.forEach((arr) => {
            if(arr[0] === sortedNums[0] && arr[1] === sortedNums[1] && arr[2] === sortedNums[2]){
                winner = true
            }
        })
        if(winner === true) 
            {
           return `${currentPlayer} is the winner`; 
        } else return winner;

        }

};

module.exports = functions;