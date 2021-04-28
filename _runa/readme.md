# Welcome to Runa.

Framework boilerplate for projects.

## Installing runa

`npm i` in the root directory.

## Install frontend packages

`runa i` in the root directory to install initial dependencies
`runa add <pkg>` or `runa i <pkg>` in the root directory to install a new dev dependency

## Scripts

Javascript is broken into different dirs:

- `/default` - these are the site-wide JS functions that are needed everywhere such as the menu scripts. Note that these will only be fired once on initial site load for BarbaJS projects.
- `/modules` - smaller JS functions such as Accordions, Tabs, Videos etc.
- `app.ts` - this is the core script file included everywhere.