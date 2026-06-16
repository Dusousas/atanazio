import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const preservedTxtFiles = new Set(["robots.txt", "security.txt", "humans.txt", "ads.txt"]);

let removedFiles = 0;
let removedDirs = 0;

function cleanTxtFiles(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      cleanTxtFiles(fullPath);
      continue;
    }

    if (entry.endsWith(".txt") && !preservedTxtFiles.has(entry)) {
      rmSync(fullPath);
      removedFiles += 1;
    }
  }
}

function cleanEmptyDirs(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (!stats.isDirectory()) continue;

    cleanEmptyDirs(fullPath);

    if (readdirSync(fullPath).length === 0) {
      rmSync(fullPath, { recursive: true });
      removedDirs += 1;
    }
  }
}

if (!existsSync(outDir)) {
  console.log("Static export cleanup skipped: out directory was not found.");
  process.exit(0);
}

cleanTxtFiles(outDir);
cleanEmptyDirs(outDir);

console.log(
  `Static export cleanup removed ${removedFiles} generated .txt file(s) and ${removedDirs} empty folder(s).`
);
