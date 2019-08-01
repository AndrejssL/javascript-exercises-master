/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era.
 * Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  constructor(input) {
    this.scores = input;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    let best = 0;
    let scores = this.scores;
    for (let i in scores) {
      let currentScore = this.scores[i];
      if (currentScore > best) {
        best = currentScore;
      }
    }
    return best;
  }

  get personalTopThree() {
    let scores = this.scores;
    let sortedScores = scores.sort((a, b) => a - b);
    let topThree = sortedScores.slice(-3);
    let reversedTopThree = topThree.sort((a, b) => b - a);
    return topThree;
  }
}

module.exports = HighScores;
