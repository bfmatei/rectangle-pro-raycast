export interface File {
  fileName: string;
  content: string;
}

export interface CommandArgumentDataItem {
  title: string;
  value: string;
}

export interface CommandArgument {
  type: "dropdown" | "text";
  name: string;
  placeholder: string;
  required: boolean;
  data?: CommandArgumentDataItem[];
}

export interface Command {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  mode: string;
  parameter: string | null;
  arguments?: CommandArgument[];
}

export interface ScriptOptions {
  commands: Command[];
  files: File[];
}

export interface ParserResults {
  commands: Command[];
  files: File[];
}

export interface ParserResultsWithDropdown {
  commands: Command[];
  dropdown: Command[];
  files: File[];
}

export interface ParserResult {
  command: Command;
  file: File;
}
