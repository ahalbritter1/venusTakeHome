const functions = require('./script');

// Name Select [TRUTHY]
test('Add Name for X and O Player', () => {
    expect(functions.nameSelect("Austin", "Mike")).toBe("Austin is X and Mike is O, Austin take the first move")
})

// First Player Must be X [FALSY]
test('Checks for First Move (must be X!) ', () => {
    expect(functions.firstPlayer('o')).toBe(false);
})

// Tracks Each Player Move & No Player Can Move Twice in a Row [TRUTHY]
// Removing Available Squares Once Valid Placement is True
test('Tracks Each Player Move (correct placement)', () => {
    expect(functions.moveTracker(1, "x", "o")).toBe("o has placed in square 1");
    expect(functions.moveTracker(5, "o", "x")).toBe("x has placed in square 5");
// Tracks Each Player Move & No Player Can Move Twice in a Row [FALSY]
    expect(functions.moveTracker(6, "x", "x")).toBe(false);
    expect(functions.moveTracker(3, "o", "o")).toBe(false);
})

test('Game over & Reset Board', () => {
    expect(functions.gameReset('gameOver')).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(functions.gameReset()).toBe(false);
})
// Checks Winning Player [TRUTHY]
test('Checks for Winning Player or No Winner Yet', () => {
    expect(functions.checkForWinner([0, 3, 6], 'x')).toBe('x is the winner!');
// Checks Winning Player [FALSY]
    expect(functions.checkForWinner([0, 3, 2], 'x')).toBe("Game In Progress");
})

//Board Visualization 
test('Board Visualization', () => {
    //Board Visualiation for API Caller
    expect(functions.boardVisualization(3, "x")).toStrictEqual(["", "", "", "x:3", "", "", "", "", ""]);
    expect(functions.boardVisualization(5, "o")).toStrictEqual(["", "", "", "", "", "o:5", "", "", ""]);

})