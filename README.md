# Rectangle Pro

Move and resize windows in macOS using Rectangle Pro app.

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
