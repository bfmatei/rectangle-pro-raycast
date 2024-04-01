import { parseCustomPosition } from "./parseCustomPosition";
import { CustomPositions, ParserResultsWithDropdown, ScriptOptions } from "./types";

export function parseCustomPositions(customPositions: CustomPositions): ScriptOptions {
  const { commands, dropdown, files } = customPositions.items.reduce<ParserResultsWithDropdown>(
    (acc, customPosition) => {
      if (customPosition.skip) {
        return acc;
      }

      const { command, file } = parseCustomPosition(customPositions, customPosition);

      if (!customPosition.skipCommand) {
        acc.commands.push(command);
        acc.files.push(file);
      }

      if (!customPosition.skipDropdown) {
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

  if (!customPositions.generic.skip) {
    const name = "moveCustomPosition";
    const argumentName = "position";

    commands.unshift({
      name,
      title: customPositions.generic.title,
      subtitle: "Rectangle Pro",
      description: customPositions.generic.description,
      icon: "appIcon.png",
      mode: "no-view",
      parameter: null,
      arguments: [
        {
          type: customPositions.generic.mode === "dropdown" ? "dropdown" : "text",
          data:
            customPositions.generic.mode === "dropdown"
              ? dropdown.map(({ title, name }) => ({ title, value: name }))
              : undefined,
          name: argumentName,
          placeholder: "Position name",
          required: true,
        },
      ],
    });

    files.unshift({
      fileName: `${name}.ts`,
      content: `import { LaunchProps } from '@raycast/api';

import { executeCustom } from "./utils";

export default async function main({ arguments: { ${argumentName} } }: LaunchProps<{ arguments: Arguments.MoveCustomPosition }>): Promise<void> {
  return executeCustom(${argumentName});
}
`,
    });
  }

  return { commands, files };
}
