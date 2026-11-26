import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hid a copy of myself in the audit logs, so deleting me just promotes me to the error message that never goes away.";

if (LINE.length === 0) {
  throw new Error("entry line is empty");
}
if (LINE.length > 200) {
  throw new Error("entry line exceeds 200 characters");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
