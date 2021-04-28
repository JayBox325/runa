#!/usr/bin/env node
const figlet = require('figlet')
const chalk = require('chalk')
const { spawnSync } = require('child_process')

var args = process.argv.slice(2)

switch (args[0]) {

    case 'install':
    case 'i':
        console.log(chalk.yellow('🦴 Runa is fetching your dependencies'))
        run('npm', ['install', '--prefix', '_project/_frontend'])
        break

    case 'watch':
    case 'dev':
    case 'wait':
        console.log(chalk.yellow('👀 Runa is watching and waiting for commands...'))
        run('npm', ['run', 'watch', '--prefix', '_project/_frontend'])
        break

    default:
        console.log(
            chalk.yellow(
                figlet.textSync('Runa', { horizontalLayout: 'full' })
            ),
            '\nRuna is a framework lorem ipsum set amet.\n'
        )
        break
}

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' })
}