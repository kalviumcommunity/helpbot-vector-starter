// test.js — GIVEN, do not edit. Run with: npm test
const { execFileSync } = require("child_process");
const { rrfFuse, reciprocalRank } = require("./search.js");

let passed = 0, failed = 0;
function check(name, actual, expected) {
  const ok =
    typeof expected === "number" && typeof actual === "number"
      ? Math.abs(actual - expected) < 1e-3
      : JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log(`  PASS  ${name}`); }
  else { failed++; console.log(`  FAIL  ${name}\n        expected: ${JSON.stringify(expected)}\n        got:      ${JSON.stringify(actual)}`); }
}
function run(label, fn) {
  console.log(`\n${label}`);
  try { fn(); } catch (e) { failed++; console.log(`  FAIL  threw: ${e.message}`); }
}

run("Task 1 — rrfFuse", () => {
  check("b is in both lists -> first", rrfFuse(["a", "b"], ["b", "c"]), ["b", "a", "c"]);
  check("x in both, then z, then y", rrfFuse(["x", "y"], ["z", "x"]), ["x", "z", "y"]);
  check("each id appears once", rrfFuse(["a", "b"], ["b", "c"]).length, 3);
});

run("Task 2 — reciprocalRank", () => {
  const ranked = ["f2", "f5", "f1"];
  check("1st place = 1", reciprocalRank(ranked, ["f2"]), 1);
  check("2nd place = 0.5", reciprocalRank(ranked, ["f5"]), 0.5);
  check("3rd place = 0.3333", reciprocalRank(ranked, ["f1"]), 0.3333);
  check("first of several correct ids = 0.5", reciprocalRank(ranked, ["f5", "f1"]), 0.5);
  check("not found = 0", reciprocalRank(ranked, ["f9"]), 0);
});

let out = "";
try { out = execFileSync("node", ["eval.js"], { encoding: "utf8" }); } catch (e) { out = ""; }

run("Task 3 — MRR printed by eval.js", () => {
  check("prints MRR: 0.60", out.includes("MRR: 0.57"), true);
});

run("Task 4 — Recall printed by eval.js", () => {
  check("prints Recall@3: 0.80", out.includes("Recall@3: 0.80"), true);
});

console.log(`\n  RESULT: ${passed} passed, ${failed} failed`);
if (failed === 0) console.log("✓ All tests passed!");
process.exit(failed === 0 ? 0 : 1);
