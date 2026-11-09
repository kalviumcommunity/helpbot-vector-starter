// eval.js — YOU edit this file (Task 3 and Task 4). Run: node eval.js
// Loop over the queries, fuse the two searches, compute MRR and Recall, print them.
const { RESULTS } = require("./data.js");
const { rrfFuse, reciprocalRank } = require("./search.js");

// ---------- Task 3 ----------
// For every item in RESULTS:
//   fused = rrfFuse(item.keyword, item.semantic)   -> keep only the TOP 3 of fused
//   rr    = reciprocalRank(fused, item.correctIds)
// mrr = (sum of reciprocal ranks) / (number of queries)
let mrr = 0;
// TODO

// ---------- Task 4 ----------
// Count a "hit" whenever the correct answer was found in the fused top 3 (rr > 0).
//   recall = hits / (number of queries)
let recall = 0;
// TODO

// ---------- Print (already done for you) ----------
console.log(`MRR: ${mrr.toFixed(2)}`);
console.log(`Recall@3: ${recall.toFixed(2)}`);
