const letterFrequencies: { [key: string]: number } = {
    E: 18,
    A: 13,
    I: 12,
    O: 11,
    T: 9,
    R: 9,
    N: 8,
    D: 6,
    S: 6,
    U: 6,
    L: 5,
    G: 4,
    B: 3,
    C: 3,
    F: 3,
    H: 3,
    M: 3,
    P: 3,
    V: 3,
    W: 3,
    Y: 3,
    J: 2,
    K: 2,
    Q: 2,
    X: 2,
    Z: 2,
}

const flattenedFrequencies: string[] = (() => {
    const bucket = []
    for (const letter in letterFrequencies) {
        const freq = letterFrequencies[letter]
        for (let i=0; i<freq; i++) {
            bucket.push(letter)
        }
    }
    return bucket
})()

function shuffle<T>(array: T[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const getNLetters: (n: number) => string = n => shuffle(flattenedFrequencies).slice(0, n).join("")
