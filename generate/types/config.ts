export interface CustomPosition {
  // The text that will appear in Raycast as the title of the command
  title: string;

  // The text will appear in Raycast as the description of the command
  // If omitted, this will be generated automatically
  description?: string;

  // The components of the `descriptionTemplate`
  descriptionComponents?: Record<string, string>;

  // The command name as required by Raycast
  name?: string;

  // The custom position name as defined in Rectangle Pro
  parameter?: string;

  // The icon path for the command
  icon?: string;

  // Flags to control command generation
  skip?: true;
  skipCommand?: true;
  skipDropdown?: true;
}

export interface Layout {
  title: string;
  description?: string;
  descriptionComponents?: Record<string, string>;
  name?: string;
  parameter?: string;
  icon?: string;
  skip?: true;
  skipCommand?: true;
  skipDropdown?: true;
}

export interface Action {
  title: string;
  description?: string;
  descriptionComponents?: Record<string, string>;
  name?: string;
  parameter?: string;
  icon?: string;
  skip?: true;
}

export interface ActionCategory {
  category: string;
  items: Action[];
  descriptionTemplate?: string;
  skip?: true;
}

export interface CustomPositionsGeneric {
  description: string;
  mode: "dropdown" | "input";
  title: string;
  icon?: string;
  skip?: true;
}

export interface LayoutsGeneric {
  description: string;
  mode: "dropdown" | "input";
  title: string;
  icon?: string;
  skip?: true;
}

export interface Actions {
  descriptionTemplate: string;
  items: ActionCategory[];
}

export interface CustomPositions {
  descriptionTemplate: string;
  generic: CustomPositionsGeneric;
  items: CustomPosition[];
}

export interface Layouts {
  descriptionTemplate: string;
  generic: LayoutsGeneric;
  items: Layout[];
}

export interface Config {
  customPositions: CustomPositions;
  layouts: Layouts;
  actions: Actions;
}