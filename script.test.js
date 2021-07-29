const functions = require('./script');

// First Player Must be X [FALSY]
test('Checks for First Move (must be X!) ', () => {
    expect(functions.firstPlayer('o')).toBe(false);
})

// Tracks Each Player Move & No Player Can Move Twice in a Row [TRUTHY]
test('Tracks Each Player Move (correct placement)', () => {
    expect(functions.moveTracker(1, "x", "o")).toBe(true);
})

// Tracks Each Player Move & No Player Can Move Twice in a Row [FALSY]
// Removing Available Squares Once Valid Placement is True
test('Tracks Each Player Move (player attempt to move twice in a row)', () => {
    expect(functions.moveTracker(6, "x", "x")).toBe(false);
})

// Checks Winning Player [TRUTHY]
test('Checks for Winning Player', () => {
    expect(functions.checkForWinner([0, 3, 6], 'x')).toBe('x is the winner')
})

// Checks Winning Player [FALSY]
test('Checks for No Winner Yet', () => {
    expect(functions.checkForWinner([0, 3, 2], 'x')).toBe("Game In Progress")
})