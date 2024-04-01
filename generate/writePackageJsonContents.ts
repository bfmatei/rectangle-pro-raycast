import { writeFileSync } from "node:fs";
import { join } from "node:path";

import { isEqual } from "lodash";

import packageJson from "../package.json";
import { Command } from "./types";

export function writePackageJsonContents(commands: Command[]): void {
  if (!isEqual(packageJson.commands, commands)) {
    // @ts-expect-error: There is a mismatch between the types in package.json and the types in the script. Nothing to worry about to be honest
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    packageJson.commands = commands.map(({ parameter: _parameter, ...command }) => command);

    writeFileSync(join(__dirname, "../package.json"), JSON.stringify(packageJson, null, 2), "utf-8");
  }
}
