import { closeMainWindow, getPreferenceValues } from "@raycast/api";
import { execFileSync } from "child_process";

export async function execute(type: "action" | "layout" | "custom", name: string): Promise<void> {
  await closeMainWindow();

  const { openPath } = getPreferenceValues<Preferences>();

  execFileSync(openPath, ["-g", `rectangle-pro://execute-${type}?name=${name}`], {
    maxBuffer: 4096 * 1024,
  });
}

export async function executeAction(name: string): Promise<void> {
  return execute("action", name);
}

export async function executeLayout(name: string): Promise<void> {
  return execute("layout", name);
}

export async function executeCustom(name: string): Promise<void> {
  return execute("custom", name);
}
