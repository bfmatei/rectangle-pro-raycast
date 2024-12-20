import { camelCase, kebabCase } from "lodash";

import { Action, ActionCategory, Actions, Command, File, ParserResult } from "./types";

export function parseAction(
  { descriptionTemplate: actionsDescriptionTemplate }: Actions,
  { descriptionTemplate: categoryDescriptionTemplate }: ActionCategory,
  { name, title, parameter, description, descriptionComponents, icon }: Action, // Added `icon`
): ParserResult {
  name = name ?? camelCase(title);
  parameter = parameter ?? kebabCase(title);

  if (!description) {
    description = Object.entries({
      title,
      titleLowerCase: title.toLowerCase(),
      ...descriptionComponents,
    }).reduce((acc, [key, value]) => acc.replaceAll(`{${key}}`, value), categoryDescriptionTemplate ?? actionsDescriptionTemplate);
  }

  const command: Command = {
    name,
    title,
    subtitle: "Rectangle Pro",
    description,
    icon: icon || "appIcon.png", // Use provided icon or default
    mode: "no-view",
    parameter: parameter || null,
  };

  const file: File = {
    fileName: `${name}.ts`,
    content: `import { executeAction } from "./utils";

export default async function main(): Promise<void> {
  return executeAction("${parameter}");
}
`,
  };

  return { command, file };
}