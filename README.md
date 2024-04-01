# Rectangle Pro

Move and resize windows in macOS using Rectangle Pro app.

## Features

- Use every feature that Rectangle Pro has to offer: move, resize, snap, pin, stash, etc.
- Create shortcuts for your custom positions and layouts. No more shortcuts for each layout and no more fiddling in menus and submenus.
- Pick what commands you want to generate. No need to have a cluttered list of commands.
- Customize the texts that are displayed in Raycast.

## Installation

1. Download, install and configure Rectangle Pro from the [official website](https://rectangleapp.com/).
2. Clone this repository to your local machine.
3. Customize the configuration file `config.json` to your needs.
4. Build the extension using the `npm run build` command.
5. Use `Import Extension` feature in Raycast to import the extension folder.
6. Enjoy!

## Configuration

The configuration file `config.ts` in `generate` folder controls what commands will be generated. Have a look over `generate/types/config.ts` to see the available options.

Out of the box, the extension comes preconfigured with everything enabled. You most definitely don't want that so I strongly suggest to set the configuration flags as you need.

## FAQ

1. Raycast has a built-in extension for window management. Why does this exist?

    Even though Raycast has a built-in support for window management, Rectangle Pro is a more powerful tool, hence the reason this extension exists.

2. Why isn't this extension available in the Raycast store?

    This extension has support for way too many commands (more than 100 actually) and Raycast has a limit of 100 commands. Additionally, Raycast does not allow you to define a list of arguments on the fly and it needs to be hardcoded unless you want to type the layout/custom position name manually.

3. Why the "skip" feature when Raycast has a "disable" feature for commands?

    Because you may want to just ignore certain commands that you know for sure you won't use. This way, you can keep the command list clean and organized.
