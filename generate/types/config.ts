export interface CustomPosition {
  // The text that will appear in Raycast as the title of the command
  title: string;

  // The text will appear in Raycast as the description of the command
  // If omitted, this will be generated automatically
  description?: string;

  // The components of the `descriptionTemplate`
  // For example, if the `descriptionTemplate` is "This is my action that performs {myCustomParameter}",
  // the `descriptionComponents` would be `{ myCustomParameter: "my custom action" }` which results in
  // "This is my action that performs my custom action"
  descriptionComponents?: Record<string, string>;

  // The command name as required by Raycast
  // This will also be the name of the associated file for the command
  // If not provided, this will be generated automatically by camel-casing the `title` property.
  name?: string;

  // The custom position name as defined in Rectangle Pro
  // If omitted, the `title` property will be used
  parameter?: string;

  // A flag that can be set to true to skip this custom position from being added to Raycast
  skip?: true;

  // A flag that can be set to true to skip generating a command for this custom position
  skipCommand?: true;

  // A flag that can be set to true to skip including this item in the dropdown list of the generic action
  skipDropdown?: true;
}

export interface CustomPositionsGeneric {
  // The description of the generic command
  description: string;

  // If `dropdown` is selected, the user will be able to select a custom position from a dropdown generated from the `items` property
  // Otherwise, the user will be able to type the name of the custom position
  mode: "dropdown" | "input";

  // A flag that can be set to true to skip generating a generic action
  skip?: true;

  // The title of the generic command
  title: string;
}

export interface CustomPositions {
  // A default description template that will be used for all custom positions
  // You can use the following placeholders
  // - `{title}` - the `title` property of the custom position
  // - `{titleLowercase}` - a lowercase version of the `title` property
  descriptionTemplate: string;

  // Configuration for the generic action
  generic: CustomPositionsGeneric;

  // The custom positions that will be added to Raycast
  items: CustomPosition[];
}

export interface Layout {
  // The text that will appear in Raycast as the title of the command
  title: string;

  // The text will appear in Raycast as the description of the command
  // If omitted, this will be generated automatically
  description?: string;

  // The components of the `descriptionTemplate`
  // For example, if the `descriptionTemplate` is "This is my action that performs {myCustomParameter}",
  // the `descriptionComponents` would be `{ myCustomParameter: "my custom action" }` which results in
  // "This is my action that performs my custom action"
  descriptionComponents?: Record<string, string>;

  // The command name as required by Raycast
  // This will also be the name of the associated file for the command
  // If not provided, this will be generated automatically by camel-casing the `title` property.
  name?: string;

  // The layout name as defined in Rectangle Pro
  // If omitted, the `title` property will be used
  parameter?: string;

  // A flag that can be set to true to skip this layout from being added to Raycast
  skip?: true;

  // A flag that can be set to true to skip generating a command for this layout
  skipCommand?: true;

  // A flag that can be set to true to skip including this item in the dropdown list of the generic action
  skipDropdown?: true;
}

export interface LayoutsGeneric {
  // The description of the generic command
  description: string;

  // If `dropdown` is selected, the user will be able to select a layout from a dropdown generated from the `items` property
  // Otherwise, the user will be able to type the name of the layout
  mode: "dropdown" | "input";

  // A flag that can be set to true to skip generating a generic action
  skip?: true;

  // The title of the generic command
  title: string;
}

export interface Layouts {
  // A default description template that will be used for all layouts
  // You can use the following placeholders
  // - `{title}` - the `title` property of the layout
  // - `{titleLowercase}` - a lowercase version of the `title` property
  descriptionTemplate: string;

  // Configuration for the generic action
  generic: LayoutsGeneric;

  // The layouts that will be added to Raycast
  items: Layout[];
}

export interface Action {
  // The text that will appear in Raycast as the title of the command
  title: string;

  // The text will appear in Raycast as the description of the command
  // If a category contains a `descriptionTemplate`, this will be prioritized over that
  description?: string;

  // The components of the `descriptionTemplate`
  // For example, if the `descriptionTemplate` is "This is my action that performs {myCustomParameter}",
  // the `descriptionComponents` would be `{ myCustomParameter: "my custom action" }` which results in
  // "This is my action that performs my custom action"
  descriptionComponents?: Record<string, string>;

  // The command name as required by Raycast
  // This will also be the name of the associated file for the command
  // If not provided, this will be generated automatically by camel-casing the `title` property.
  name?: string;

  // The action named that should be performed by Rectangle Pro
  // This should match one of the predefined actions in Rectangle Pro
  parameter?: string;

  // A flag that can be set to true to skip this action from being added to Raycast
  skip?: true;
}

export interface ActionCategory {
  // The name of the category
  category: string;

  // The items in this category
  items: Action[]; // The items in this category

  // A template for the description
  // i.e. "This is my action that performs {myCustomParameter}"
  descriptionTemplate?: string;

  // A flag that can be set to true to skip all the items in this category from being added to Raycast
  skip?: true;
}

export interface Actions {
  // A default description template that will be used for all actions
  // You can use the following placeholders
  // - `{title}` - the `title` property of the action
  // - `{titleLowercase}` - a lowercase version of the `title` property
  descriptionTemplate: string;

  // The actions that will be added to Raycast
  items: ActionCategory[];
}

export interface Config {
  customPositions: CustomPositions;
  layouts: Layouts;
  actions: Actions;
}
