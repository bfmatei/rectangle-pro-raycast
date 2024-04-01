import { camelCase, kebabCase } from "lodash";

import { Action, ActionCategory, Actions, Command, File, ParserResult } from "./types";

export function parseAction(
  { descriptionTemplate: actionsDescriptionTemplate }: Actions,
  { descriptionTemplate: categoryDescriptionTemplate }: ActionCategory,
  { name, title, parameter, description, descriptionComponents }: Action,
): ParserResult {
  name = name ?? camelCase(title);
  parameter = parameter ?? kebabCase(title);

  if (!description) {
    const descriptionTemplate = categoryDescriptionTemplate ?? actionsDescriptionTemplate;

    description = Object.entries({
      title,
      titleLowerCase: title.toLowerCase(),
      ...descriptionComponents,
    }).reduce((acc, [key, value]) => acc.replaceAll(`{${key}}`, value), descriptionTemplate);
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
    content: `import { executeAction } from "./utils";

export default async function main(): Promise<void> {
  return executeAction("${parameter}");
}
`,
  };

  return { command, file };
}
