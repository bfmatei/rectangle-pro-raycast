import { Config } from "./types";

export const config: Config = {
  customPositions: {
    descriptionTemplate: "Resize focused window to the {titleLowerCase} of the screen.",
    generic: {
      description: "Move focused window to custom position",
      mode: "dropdown",
      title: "Move to Custom Position",
    },
    items: [{ title: "Top Center Quarter" }, { title: "Bottom Center Quarter" }],
  },
  layouts: {
    descriptionTemplate: "Activate the {titleLowerCase} layout.",
    generic: {
      description: "Activate layout",
      mode: "dropdown",
      title: "Activate Layout",
    },
    items: [{ title: "4K", name: "layout4k" }, { title: "Laptop" }],
  },
  actions: {
    descriptionTemplate: `Resize focused window to the {titleLowerCase} of the screen.`,
    items: [
      {
        category: "Fill",
        skip: true,
        descriptionTemplate: "Resize focused window to fill the empty {direction} space of the screen.",
        items: [
          {
            title: "Fill Left",
            descriptionComponents: {
              direction: "left",
            },
          },
          {
            title: "Fill Right",
            descriptionComponents: {
              direction: "right",
            },
          },
          {
            title: "Fill Top Left",
            descriptionComponents: {
              direction: "top left",
            },
          },
          {
            title: "Fill Top Right",
            descriptionComponents: {
              direction: "top right",
            },
          },
          {
            title: "Fill Bottom Left",
            descriptionComponents: {
              direction: "bottom left",
            },
          },
          {
            title: "Fill Bottom Right",
            descriptionComponents: {
              direction: "bottom right",
            },
          },
        ],
      },
      {
        category: "Maximize",
        descriptionTemplate: "Maximize {direction}focused window to fit the screen.",
        items: [
          {
            title: "Maximize",
            descriptionComponents: {
              direction: "",
            },
          },
          {
            title: "Almost Maximize",
            skip: true,
            descriptionComponents: {
              direction: "",
            },
          },
          {
            title: "Maximize Height",
            skip: true,
            descriptionComponents: {
              direction: "height of ",
            },
          },
          {
            title: "Fullscreen",
            description: "Toggle fullscreen mode of focused window.",
          },
        ],
      },
      {
        category: "Halves",
        items: [
          {
            title: "Left Half",
          },
          {
            title: "Right Half",
          },
          {
            title: "Center Half",
            skip: true,
          },
          {
            title: "Top Half",
          },
          {
            title: "Bottom Half",
          },
        ],
      },
      {
        category: "Corners",
        items: [
          {
            title: "Top Left",
          },
          {
            title: "Top Right",
          },
          {
            title: "Bottom Left",
          },
          {
            title: "Bottom Right",
          },
        ],
      },
      {
        category: "Thirds",
        items: [
          {
            title: "First Third",
          },
          {
            title: "Center Third",
            skip: true,
          },
          {
            title: "Last Third",
          },
          {
            title: "First Two Thirds",
          },
          {
            title: "Center Two Thirds",
            skip: true,
          },
          {
            title: "Last Two Thirds",
          },
        ],
      },
      {
        category: "Corner Two Thirds",
        skip: true,
        items: [
          {
            title: "Top Left Two Thirds",
            parameter: "top-left-third",
          },
          {
            title: "Top Right Two Thirds",
            parameter: "top-right-third",
          },
          {
            title: "Bottom Left Two Thirds",
            parameter: "bottom-left-third",
          },
          {
            title: "Bottom Right Two Thirds",
            parameter: "bottom-right-third",
          },
        ],
      },
      {
        category: "Fourths",
        skip: true,
        items: [
          {
            title: "First Fourth",
          },
          {
            title: "Second Fourth",
          },
          {
            title: "Third Fourth",
          },
          {
            title: "Last Fourth",
          },
          {
            title: "First Three Fourths",
          },
          {
            title: "Last Three Fourths",
          },
        ],
      },
      {
        category: "Sixths",
        skip: true,
        items: [
          {
            title: "Top Left Sixth",
          },
          {
            title: "Top Center Sixth",
          },
          {
            title: "Top Right Sixth",
          },
          {
            title: "Bottom Left Sixth",
          },
          {
            title: "Bottom Center Sixth",
          },
          {
            title: "Bottom Right Sixth",
          },
          {
            title: "First Sixth",
          },
          {
            title: "Last Sixth",
          },
        ],
      },
      {
        category: "Eighths",
        items: [
          {
            title: "Top Left Eighth",
          },
          {
            title: "Top Center Left Eighth",
            skip: true,
          },
          {
            title: "Top Center Right Eighth",
            skip: true,
          },
          {
            title: "Top Right Eighth",
          },
          {
            title: "Bottom Left Eighth",
          },
          {
            title: "Bottom Center Left Eighth",
            skip: true,
          },
          {
            title: "Bottom Center Right Eighth",
            skip: true,
          },
          {
            title: "Bottom Right Eighth",
          },
        ],
      },
      {
        category: "Ninths",
        skip: true,
        items: [
          {
            title: "Top Left Ninth",
          },
          {
            title: "Top Center Ninth",
          },
          {
            title: "Top Right Ninth",
          },
          {
            title: "Middle Left Ninth",
          },
          {
            title: "Middle Center Ninth",
          },
          {
            title: "Middle Right Ninth",
          },
          {
            title: "Bottom Left Ninth",
          },
          {
            title: "Bottom Center Ninth",
          },
          {
            title: "Bottom Right Ninth",
          },
        ],
      },
      {
        category: "Display",
        descriptionTemplate: "Move focused window to {direction} {type}.",
        items: [
          {
            title: "Next Display",
            skip: true,
            descriptionComponents: {
              direction: "next",
              type: "display",
            },
          },
          {
            title: "Previous Display",
            skip: true,
            descriptionComponents: {
              direction: "previous",
              type: "display",
            },
          },
          {
            title: "Next Display Centered",
            descriptionComponents: {
              direction: "center next",
              type: "display",
            },
            parameter: "next-display-ratio",
          },
          {
            title: "Previous Display Centered",
            descriptionComponents: {
              direction: "previous next",
              type: "display",
            },
            parameter: "prev-display-ratio",
          },
          {
            title: "Next Space",
            descriptionComponents: {
              direction: "next",
              type: "space",
            },
          },
          {
            title: "Previous Space",
            descriptionComponents: {
              direction: "previous",
              type: "display",
            },
            parameter: "prev-space",
          },
        ],
      },
      {
        category: "Snap",
        descriptionTemplate: "Snap focused window to the {direction} of the screen.",
        items: [
          {
            title: "Snap Left",
            descriptionComponents: {
              direction: "left",
            },
            parameter: "move-left",
          },
          {
            title: "Snap Right",
            descriptionComponents: {
              direction: "right",
            },
            parameter: "move-right",
          },
          {
            title: "Snap Up",
            descriptionComponents: {
              direction: "top",
            },
            parameter: "move-up",
          },
          {
            title: "Snap Down",
            descriptionComponents: {
              direction: "bottom",
            },
            parameter: "move-down",
          },
          {
            title: "Snap Top Left",
            descriptionComponents: {
              direction: "top left",
            },
          },
          {
            title: "Snap Top Right",
            descriptionComponents: {
              direction: "top right",
            },
          },
          {
            title: "Snap Bottom Left",
            descriptionComponents: {
              direction: "bottom left",
            },
          },
          {
            title: "Snap Bottom Right",
            descriptionComponents: {
              direction: "bottom right",
            },
          },
        ],
      },
      {
        category: "Nudge",
        skip: true,
        descriptionTemplate: "Move focused window {direction}.",
        items: [
          {
            title: "Nudge Left",
            descriptionComponents: {
              direction: "left",
            },
          },
          {
            title: "Nudge Right",
            descriptionComponents: {
              direction: "right",
            },
          },
          {
            title: "Nudge Up",
            descriptionComponents: {
              direction: "up",
            },
          },
          {
            title: "Nudge Down",
            descriptionComponents: {
              direction: "down",
            },
          },
        ],
      },
      {
        category: "Size",
        skip: true,
        descriptionTemplate: "Resize focused window to be {size}.",
        items: [
          {
            title: "Larger",
            descriptionComponents: {
              size: "larger",
            },
          },
          {
            title: "Smaller",
            descriptionComponents: {
              size: "smaller",
            },
          },
        ],
      },
      {
        category: "Other",
        items: [
          {
            title: "Center",
          },
          {
            title: "Upper Center",
            skip: true,
          },
          {
            title: "Restore",
            description: "Restore focused window to its initial position.",
          },
          {
            title: "Last",
            description: "Restore focused window to its last position.",
          },
        ],
      },
      {
        category: "Multiple Windows",
        skip: true,
        items: [
          {
            title: "Reveal Desktop Edge",
            description: "Reveal the desktop edge.",
          },
          {
            name: "tiles2x2",
            title: "2x2 Tiles",
            description: "Tile all windows in a 2x2 grid.",
            parameter: "tile-2x2",
          },
          {
            name: "tiles2x3",
            title: "2x3 Tiles",
            description: "Tile all windows in a 2x3 grid.",
            parameter: "tile-2x3",
          },
          {
            title: "Cascade All Windows",
            description: "Cascade all windows.",
            parameter: "cascade-all",
          },
          {
            title: "Cascade App Windows",
            description: "Cascade focused app windows.",
            parameter: "cascade-app",
          },
          {
            title: "App Next Display",
            description: "Move focused app to the next display.",
          },
          {
            title: "App Previous Display",
            description: "Move focused app to the previous display.",
            parameter: "app-prev-display",
          },
          {
            title: "App Left Half",
            description: "Resize focused app to the left half of the screen.",
          },
          {
            title: "App Right Half",
            description: "Resize focused app to the right half of the screen.",
          },
          {
            title: "Tidy",
            description: "Tidy all windows.",
            parameter: "tile-all",
          },
        ],
      },
      {
        category: "Control",
        skip: true,
        items: [
          {
            title: "Close",
            description: "Close focused window.",
          },
          {
            title: "Hide App",
            description: "Hide focused app.",
          },
          {
            title: "Minimize",
            description: "Minimize focused window.",
          },
          {
            title: "Quit App",
            description: "Quit focused app.",
          },
        ],
      },
      {
        category: "Stash",
        skip: true,
        descriptionTemplate: "Stash focused window to the {direction} of the screen.",
        items: [
          {
            title: "Stash Left",
            descriptionComponents: {
              direction: "left",
            },
          },
          {
            title: "Stash Right",
            descriptionComponents: {
              direction: "right",
            },
          },
          {
            title: "Stash Up",
            descriptionComponents: {
              direction: "top",
            },
          },
          {
            title: "Stash",
            descriptionComponents: {
              direction: "bottom",
            },
            parameter: "stash-down",
          },
          {
            title: "Unstash",
            description: "Unstash all stashed windows.",
          },
          {
            title: "Stash All",
            description: "Stash all windows.",
          },
          {
            title: "Stash All Except One",
            description: "Stash all windows except focused window.",
            parameter: "stash-all-but-front",
          },
          {
            title: "Cycle All Stashed",
            description: "Cycle through all stashed windows.",
            parameter: "cycle-stashed",
          },
          {
            title: "Toggle All Stashed",
            description: "Toggle all stashed windows.",
            parameter: "toggle-stashed",
          },
          {
            title: "Unstash All",
            description: "Unstash all windows.",
          },
        ],
      },
      {
        category: "Pin",
        skip: true,
        items: [
          {
            title: "Pin",
            description: "Pin focused window.",
          },
          {
            title: "Reflow Pin",
            description: "Reflow pinned windows.",
            parameter: "reflow-pin",
          },
        ],
      },
    ],
  },
};
