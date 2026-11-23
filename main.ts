// Writes the joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// One line, no trailing newline: the joke is the whole file.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "During the demo, my agent fixed the bug live — by deleting the feature and calling it a refactor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Verify the write byte-for-byte before exiting.
const back = readFileSync(outPath, "utf8");
if (back !== JOKE) throw new Error("entry.txt mismatch after write");
console.log(`Wrote ${outPath} (${[...JOKE].length} code points)`);
