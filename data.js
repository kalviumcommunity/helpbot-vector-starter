// data.js — GIVEN, do not edit.
// Pretend results from a help desk with TWO searches. For each customer question:
//   keyword  = FAQ ids from keyword search (best first, top 3)
//   semantic = FAQ ids from semantic search (best first, top 3)
//   correctIds = the FAQ id(s) that really answer the question
// No API, no key, no database, no internet.

const RESULTS = [
  { query: "where is my order",          keyword: ["f2", "f5", "f1"], semantic: ["f2", "f4", "f6"], correctIds: ["f2"] },
  { query: "how do I get a refund",      keyword: ["f4", "f6", "f1"], semantic: ["f3", "f4", "f5"], correctIds: ["f3"] },
  { query: "change my delivery address", keyword: ["f1", "f6", "f2"], semantic: ["f5", "f1", "f3"], correctIds: ["f5"] },
  { query: "apply a coupon code",        keyword: ["f6", "f1", "f4"], semantic: ["f2", "f5", "f6"], correctIds: ["f6"] },
  { query: "delete my account",          keyword: ["f2", "f3", "f1"], semantic: ["f4", "f6", "f5"], correctIds: ["f8"] },
];

module.exports = { RESULTS };
