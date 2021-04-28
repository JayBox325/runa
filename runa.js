#!/usr/bin/env node
const figlet = require('figlet')
const chalk = require('chalk')
const { spawnSync } = require('child_process')

var args = process.argv.slice(2)

switch (args[0]) {

    case 'install':
    case 'i':
        console.log('🦴 Runa is fetching your dependencies')
        run('npm', ['install', '--prefix']);
        break

    default:
        console.log(
            chalk.yellow(
                figlet.textSync('Runa', { horizontalLayout: 'full' })
            )
        )
        break
}

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' })
}