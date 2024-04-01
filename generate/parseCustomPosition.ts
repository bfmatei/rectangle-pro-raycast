import { camelCase } from "lodash";

import { Command, CustomPosition, CustomPositions, File, ParserResult } from "./types";

export function parseCustomPosition(
  { descriptionTemplate: customPositionsDescriptionTemplate }: CustomPositions,
  { name, title, parameter, description, descriptionComponents }: CustomPosition,
): ParserResult {
  name = name ?? camelCase(title);
  parameter = parameter ?? title;

  if (!description) {
    description = Object.entries({
      title,
      titleLowerCase: title.toLowerCase(),
      ...descriptionComponents,
    }).reduce((acc, [key, value]) => acc.replaceAll(`{${key}}`, value), customPositionsDescriptionTemplate);
  }

  const command: Command = {
    name,
    title,
    subtitle: "Rectangle Pro",
    description,
    icon: "appIcon.png",
    mode: "no-view",
    parameter,
  };

  const file: File = {
    fileName: `${name}.ts`,
    content: `import { executeCustom } from "./utils";

export default async function main(): Promise<void> {
  return executeCustom("${parameter}");
}
`,
  };

  return { command, file };
}
