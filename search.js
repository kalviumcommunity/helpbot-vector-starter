// search.js — YOU edit this file (Task 1 and Task 2).
// Plain JavaScript only. No packages, no API keys, no database needed.

// ---------- Task 1 ----------
// Reciprocal Rank Fusion (RRF): merge two ranked id lists into ONE list.
//   RRF score of an id = sum, over each list it appears in, of 1 / (k + rank)
//   rank starts at 1 (first item = rank 1). Use k = 60.
// Return ONE array of ids, highest RRF score first (each id appears once).
function rrfFuse(keywordIds, semanticIds, k = 60) {
  // TODO
}

// ---------- Task 2 ----------
// Reciprocal Rank for ONE query.
// `rankedIds` = ids, best first. `correctIds` = array of right answers.
// Find the rank of the FIRST correct id (rank starts at 1) and return 1 / rank.
//   1st -> 1, 2nd -> 0.5, 3rd -> 0.3333
// If none of the correct ids appear -> return 0.
function reciprocalRank(rankedIds, correctIds) {
  // TODO
}

module.exports = { rrfFuse, reciprocalRank };
