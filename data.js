// data.js — GIVEN, do not edit.
// Pretend results from a help-desk search: for each customer question, the ranked
// list of FAQ ids it returned (best first, top 3) and the correct FAQ id(s).
// No API, no key, no database, no internet.

const RESULTS = [
  { query: "where is my order",        ranked: ["f2", "f5", "f1"], correctIds: ["f2"] },
  { query: "how do I get a refund",    ranked: ["f4", "f6", "f3"], correctIds: ["f3"] },
  { query: "change my delivery address", ranked: ["f1", "f5", "f2"], correctIds: ["f5"] },
  { query: "apply a coupon code",      ranked: ["f6", "f1", "f4"], correctIds: ["f6"] },
  { query: "delete my account",        ranked: ["f2", "f3", "f1"], correctIds: ["f8"] },
];

module.exports = { RESULTS };
