import dictionary from "./dictionary.json";

interface ValidationResult {
  validWords: string[];
  invalidWords: string[];
}

const dictSet = new Set((dictionary as { words: string[] }).words);

export const validateWords: (board: string[][]) => ValidationResult = (
  board
) => {
  const words = [
    ...extractWordsHorizontal(board),
    ...extractWordsVertical(board),
  ].map(word => word.toLocaleLowerCase());

  const validWords = words.filter((word) => dictSet.has(word));
  const invalidWords = words.filter((word) => !dictSet.has(word));

  return { validWords, invalidWords }
};

/**
 * Accepts the board as a matrix of letters and extracts any
 * horizontal strings (length > 1). Empty strings or spaces are used if no letter.
 */
export const extractWordsHorizontal: (board: string[][]) => string[] = (
  board
) => {
  const words = [];
  for (const row of board) {
    let currentWord = "";
    for (const letter of row) {
      if (letter === " " || letter === "") {
        if (currentWord.length > 1) {
          words.push(currentWord);
        }
        currentWord = "";
      } else {
        currentWord += letter;
      }
    }
    if (currentWord.length > 1) {
      words.push(currentWord);
    }
  }

  return words;
};

function transposeArray<T>(array: T[][], arrayLength: number) {
  var newArray: T[][] = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < arrayLength; j++) {
      const elem = array[i][j];
      newArray[j].push(elem);
    }
  }

  return newArray;
}

export const extractWordsVertical: (board: string[][]) => string[] = (
  board
) => {
  return extractWordsHorizontal(transposeArray(board, board.length));
};
