import { config } from "./config";
import { parseActions } from "./parseActions";
import { parseCustomPositions } from "./parseCustomPositions";
import { parseLayouts } from "./parseLayouts";
import { Actions, CustomPositions, Layouts, ScriptOptions } from "./types";
import { writeFileContents } from "./writeFileContents";
import { writePackageJsonContents } from "./writePackageJsonContents";

const { commands, files } = Object.entries(config).reduce<ScriptOptions>(
  (acc, [area, areaConfig]) => {
    let result: ScriptOptions;

    switch (area) {
      case "customPositions":
        result = parseCustomPositions(areaConfig as CustomPositions);
        break;

      case "layouts":
        result = parseLayouts(areaConfig as Layouts);
        break;

      case "actions":
        result = parseActions(areaConfig as Actions);
        break;

      default:
        result = {
          commands: [],
          files: [],
        };
    }

    acc.commands.push(...result.commands);
    acc.files.push(...result.files);

    return acc;
  },
  {
    commands: [],
    files: [],
  },
);

writePackageJsonContents(commands);

writeFileContents(files);
