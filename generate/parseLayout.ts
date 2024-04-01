import { camelCase } from "lodash";

import { Command, File, Layout, Layouts, ParserResult } from "./types";

export function parseLayout(
  { descriptionTemplate: layoutsDescriptionTemplate }: Layouts,
  { name, title, parameter, description, descriptionComponents }: Layout,
): ParserResult {
  name = name ?? camelCase(title);
  parameter = parameter ?? title;

  if (!description) {
    description = Object.entries({
      title,
      titleLowerCase: title.toLowerCase(),
      ...descriptionComponents,
    }).reduce((acc, [key, value]) => acc.replaceAll(`{${key}}`, value), layoutsDescriptionTemplate);
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
    content: `import { executeLayout } from "./utils";

export default async function main(): Promise<void> {
  return executeLayout("${parameter}");
}
`,
  };

  return { command, file };
}
