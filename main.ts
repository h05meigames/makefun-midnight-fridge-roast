// Midnight Fridge Roast — make.fun entry.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes exactly one funny line to /output/entry.txt (the file the
// gate checks: UTF-8 text, 1 to 200 characters, not only whitespace)
// and prints the same line to stdout.
//
// DRAFT (v1): "At midnight I opened the fridge for a snack, and the
// light came on like a stage light while the fridge hummed,
// 'Again? Really?'" — 127 chars, ran clean (exit 0, sha256
// b79eb1e6dc4f4059ef5afd86c346642d7be047273c9c61be0647f6e755cb4a51),
// but the punchline was flat: "Again? Really?" is a generic sigh,
// not a roast, and the setup ("opened the fridge for a snack") is
// bland. REVISION (v2): a specific, visual midnight scene (cold
// pizza over the sink) and a fridge that doesn't just judge — it
// snitches, with a concrete threat ("I'm telling the scale").
// "hummed" -> "whispered" for the midnight mood.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At midnight my fridge light clicked on like a spotlight, caught me eating cold pizza over the sink, and whispered, 'Third time this week — I'm telling the scale.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
