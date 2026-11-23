// HYPERDRIVE TRENCH 3D — entrypoint.
//
// The grader runs this file and expects it to place the entry's X post
// link where it can be checked. All it does is read POST.json from this
// repository's root, make sure it carries a url string, and write those
// exact bytes into the output directory. Nothing is fetched, nothing is
// generated, nothing depends on the clock or the working directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
const postBytes = readFileSync(join(repoRoot, "POST.json"));
const post = JSON.parse(postBytes.toString("utf8")) as unknown;
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string"
) {
  throw new Error("POST.json must contain a url string");
}
writeFileSync(join(outputDir, "POST.json"), postBytes);
