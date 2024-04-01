import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { File } from "./types";

export function writeFileContents(files: File[]): void {
  const basePath = join(__dirname, "../src");

  files.forEach((file) => {
    const filePath = join(basePath, file.fileName);

    let shouldWrite = true;

    try {
      const existing = readFileSync(filePath, {
        encoding: "utf-8",
        flag: "rs",
      });

      if (existing === file.content) {
        shouldWrite = false;
      }
    } catch (err) {
      shouldWrite = true;
    }

    if (shouldWrite) {
      writeFileSync(filePath, file.content, {
        encoding: "utf-8",
        flag: "w+",
      });
    }
  });
}
