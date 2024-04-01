import { parseAction } from "./parseAction";
import { Actions, ParserResults, ScriptOptions } from "./types";

export function parseActions(actions: Actions): ScriptOptions {
  return actions.items.reduce<ParserResults>(
    (acc, actionCategory) => {
      if (actionCategory.skip) {
        return acc;
      }

      actionCategory.items.forEach((action) => {
        if (action.skip) {
          return acc;
        }

        const { command, file } = parseAction(actions, actionCategory, action);

        acc.commands.push(command);
        acc.files.push(file);
      });

      return acc;
    },
    {
      commands: [],
      files: [],
    },
  );
}
