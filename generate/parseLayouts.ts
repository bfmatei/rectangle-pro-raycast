import { parseLayout } from "./parseLayout";
import { Layouts, ParserResultsWithDropdown, ScriptOptions } from "./types";

export function parseLayouts(layouts: Layouts): ScriptOptions {
  const { commands, dropdown, files } = layouts.items.reduce<ParserResultsWithDropdown>(
    (acc, layout) => {
      if (layout.skip) {
        return acc;
      }

      const { command, file } = parseLayout(layouts, layout);

      if (!layout.skipCommand) {
        acc.commands.push(command);
        acc.files.push(file);
      }

      if (!layout.skipDropdown) {
        acc.dropdown.push(command);
      }

      return acc;
    },
    {
      commands: [],
      dropdown: [],
      files: [],
    },
  );

  if (!layouts.generic.skip) {
    const name = "activateLayout";
    const argumentName = "layout";

    commands.unshift({
      name,
      title: layouts.generic.title,
      subtitle: "Rectangle Pro",
      description: layouts.generic.description,
      icon: "appIcon.png",
      mode: "no-view",
      parameter: null,
      arguments: [
        {
          type: layouts.generic.mode === "dropdown" ? "dropdown" : "text",
          data:
            layouts.generic.mode === "dropdown"
              ? dropdown.map(({ title, name }) => ({ title, value: name }))
              : undefined,
          name: argumentName,
          placeholder: "Layout name",
          required: true,
        },
      ],
    });

    files.unshift({
      fileName: `${name}.ts`,
      content: `import { LaunchProps } from '@raycast/api';

import { executeLayout } from "./utils";

export default async function main({ arguments: { ${argumentName} } }: LaunchProps<{ arguments: Arguments.ActivateLayout }>): Promise<void> {
  return executeLayout(${argumentName});
}
`,
    });
  }

  return { commands, files };
}
