const boggle_solver = require('/home/codio/workspace/Boggle_Impl2_After_CodeReview/boggle_solver.js');

function ToGrid(...rows) {
  return rows.map(row => row.split(""));
}


/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}


describe('Boggle Solver tests', () => {
  describe('Normal input', () => {
    
    test('Normal case 3x3', () => {
      // Tests a normal 3x3 grid.
      const grid = [['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']];
      const dictionary = ['abc', 'abdhi', 'abi'];
      const expected = ['abc', 'abdhi'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());   
    });
  });
});
