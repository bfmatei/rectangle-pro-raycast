import { Config } from "./types";

export const config: Config = {
  customPositions: {
    descriptionTemplate: "Resize focused window to the {titleLowerCase} of the screen.",
    generic: {
      description: "Move focused window to custom position",
      mode: "input",
      title: "Move to Custom Position",
      icon: "window-positions/large_specCharmTemplate.png", // Default icon
    },
    items: [], // No custom positions by default
  },
  layouts: {
    descriptionTemplate: "Activate the {titleLowerCase} layout.",
    generic: {
      description: "Activate layout",
      mode: "input",
      title: "Activate Layout",
      icon: "window-positions/large_appToolbarTemplate.png", // Default icon
    },
    items: [], // No layouts by default
  },
  actions: {
    descriptionTemplate: `Resize focused window to the {titleLowerCase} of the screen.`,
    items: [
      {
        category: "Fill",
        descriptionTemplate: "Resize focused window to fill the empty {direction} space of the screen.",
        items: [
          {
            title: "Fill Left",
            descriptionComponents: { direction: "left" },
            icon: "window-positions/large_fillLeftTemplate.png",
          },
          {
            title: "Fill Right",
            descriptionComponents: { direction: "right" },
            icon: "window-positions/large_fillRightTemplate.png",
          },
          {
            title: "Fill Top Left",
            descriptionComponents: { direction: "top left" },
            icon: "window-positions/large_fillCornersTLLargeTemplate.png",
          },
          {
            title: "Fill Top Right",
            descriptionComponents: { direction: "top right" },
            icon: "window-positions/large_fillCornersTRLargeTemplate.png",
          },
          {
            title: "Fill Bottom Left",
            descriptionComponents: { direction: "bottom left" },
            icon: "window-positions/large_fillCornersBLLargeTemplate.png",
          },
          {
            title: "Fill Bottom Right",
            descriptionComponents: { direction: "bottom right" },
            icon: "window-positions/large_fillCornersBRLargeTemplate.png",
          },
        ],
      },
      {
        category: "Maximize",
        descriptionTemplate: "Maximize {direction}focused window to fit the screen.",
        items: [
          {
            title: "Maximize",
            descriptionComponents: { direction: "" },
            icon: "window-positions/large_maximizeTemplate.png",
          },
          {
            title: "Almost Maximize",
            descriptionComponents: { direction: "" },
            icon: "window-positions/large_almostMaximizeTemplate.png",
          },
          {
            title: "Maximize Height",
            descriptionComponents: { direction: "height of " },
            icon: "window-positions/large_maximizeHeightTemplate.png",
          },
          {
            title: "Fullscreen",
            description: "Toggle fullscreen mode of focused window.",
            icon: "window-positions/fullScreenTemplate.png",
          },
        ],
      },
      {
        category: "Halves",
        items: [
          {
            title: "Left Half",
            icon: "window-positions/large_leftHalfTemplate.png",
          },
          {
            title: "Right Half",
            icon: "window-positions/large_rightHalfTemplate.png",
          },
          {
            title: "Center Half",
            icon: "window-positions/large_halfWidthCenterTemplate.png",
          },
          {
            title: "Top Half",
            icon: "window-positions/large_topHalfTemplate.png",
          },
          {
            title: "Bottom Half",
            icon: "window-positions/large_bottomHalfTemplate.png",
          },
        ],
      },
      {
        category: "Corners",
        items: [
          {
            title: "Top Left",
            icon: "window-positions/large_topLeftTemplate.png",
          },
          {
            title: "Top Right",
            icon: "window-positions/large_topRightTemplate.png",
          },
          {
            title: "Bottom Left",
            icon: "window-positions/large_bottomLeftTemplate.png",
          },
          {
            title: "Bottom Right",
            icon: "window-positions/large_bottomRightTemplate.png",
          },
        ],
      },
      {
        category: "Thirds",
        items: [
          {
            title: "First Third",
            icon: "window-positions/large_firstThirdTemplate.png",
          },
          {
            title: "Center Third",
            icon: "window-positions/large_centerThirdTemplate.png",
          },
          {
            title: "Last Third",
            icon: "window-positions/large_lastThirdTemplate.png",
          },
          {
            title: "First Two Thirds",
            icon: "window-positions/large_firstTwoThirdsTemplate.png",
          },
          {
            title: "Center Two Thirds",
            icon: "window-positions/large_centerTwoThirdsTemplate.png",
          },
          {
            title: "Last Two Thirds",
            icon: "window-positions/large_lastTwoThirdsTemplate.png",
          },
        ],
      },
      {
        category: "Corner Two Thirds",
        items: [
          {
            title: "Top Left Two Thirds",
            parameter: "top-left-third",
            icon: "window-positions/large_tlCornerTwoThirdsTemplate.png",
          },
          {
            title: "Top Right Two Thirds",
            parameter: "top-right-third",
            icon: "window-positions/large_trCornerTwoThirdsTemplate.png",
          },
          {
            title: "Bottom Left Two Thirds",
            parameter: "bottom-left-third",
            icon: "window-positions/large_blCornerTwoThirdsTemplate.png",
          },
          {
            title: "Bottom Right Two Thirds",
            parameter: "bottom-right-third",
            icon: "window-positions/large_brCornerTwoThirdsTemplate.png",
          },
        ],
      },
      {
        category: "Fourths",
        items: [
          {
            title: "First Fourth",
            icon: "window-positions/large_leftFourthTemplate.png",
          },
          {
            title: "Second Fourth",
            icon: "window-positions/large_centerLeftFourthTemplate.png",
          },
          {
            title: "Third Fourth",
            icon: "window-positions/large_centerRightFourthTemplate.png",
          },
          {
            title: "Last Fourth",
            icon: "window-positions/large_rightFourthTemplate.png",
          },
          {
            title: "First Three Fourths",
            icon: "window-positions/large_firstThreeFourthsTemplate.png",
          },
          {
            title: "Last Three Fourths",
            icon: "window-positions/large_lastThreeFourthsTemplate.png",
          },
        ],
      },
      {
        category: "Sixths",
        items: [
          {
            title: "First Sixth",
            icon: "window-positions/large_leftSixthTemplate.png",
          },
          {
            title: "Last Sixth",
            icon: "window-positions/large_rightSixthTemplate.png",
          },
        ],
      },
      {
        category: "Nudge",
        descriptionTemplate: "Move focused window {direction}.",
        items: [
          {
            title: "Nudge Left",
            descriptionComponents: { direction: "left" },
            icon: "window-positions/large_nudgeLeftTemplate.png",
          },
          {
            title: "Nudge Right",
            descriptionComponents: { direction: "right" },
            icon: "window-positions/large_nudgeRightTemplate.png",
          },
          {
            title: "Nudge Up",
            descriptionComponents: { direction: "up" },
            icon: "window-positions/large_nudgeUpTemplate.png",
          },
          {
            title: "Nudge Down",
            descriptionComponents: { direction: "down" },
            icon: "window-positions/large_nudgeDownTemplate.png",
          },
        ],
      },
      {
        category: "Size",
        descriptionTemplate: "Resize focused window to be {size}.",
        items: [
          {
            title: "Larger",
            descriptionComponents: { size: "larger" },
            icon: "window-positions/large_largerTemplate.png",
          },
          {
            title: "Smaller",
            descriptionComponents: { size: "smaller" },
            icon: "window-positions/large_smallerTemplate.png",
          },
        ],
      },
      {
        category: "Other",
        items: [
          {
            title: "Center",
            description: "Center the focused window.",
            icon: "window-positions/large_centerTemplate.png",
          },
          {
            title: "Upper Center",
            description: "Move the focused window to the upper center of the screen.",
            icon: "window-positions/large_upperCenterTemplate.png",
          },
          {
            title: "Restore",
            description: "Restore the focused window to its initial position.",
            icon: "window-positions/large_restoreTemplate.png",
          },
          {
            title: "Last",
            description: "Restore the focused window to its last position.",
            icon: "window-positions/large_restore2Template.png",
          },
        ],
      },
    ],
  },
};