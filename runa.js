#!/usr/bin/env node
const figlet = require('figlet')
const chalk = require('chalk')
const { spawnSync } = require('child_process')

var args = process.argv.slice(2)

switch (args[0]) {

    case 'install':
    case 'i':
    case 'ok':
        if (process.argv.length == 3) {
            console.log(chalk.yellow('🦴 Runa is fetching your dependencies and installing them.'))
            run('npm', ['install', '--prefix', '_project/_frontend'])
        } else if (process.argv.length == 4) {
            installNewPkg(process.argv.slice(3))
        }
        break

    case 'watch':
    case 'dev':
    case 'wait':
        console.log(chalk.yellow('👀 Runa is watching and waiting for commands...'))
        run('npm', ['run', 'dev', '--prefix', '_project/_frontend'])
        break

    case 'start':
        console.log(chalk.yellow('👀 Runa is starting the NextJS server'))
        run('npm', ['run', 'start', '--prefix', '_project/_frontend'])
        break

    case 'add':
    case 'fetch':
        installNewPkg(process.argv.slice(3))
        break

    default:
        console.log(
            chalk.yellow(
                figlet.textSync('Runa', { horizontalLayout: 'full' })
            ),
            '\nRuna is a framework lorem ipsum set amet.\n',

            chalk.yellow('\ninstall'),
            '\t\t\t',
            'This installs stuff',

            chalk.yellow('\ncheese'),
            '\t\t\t\t',
            'This installs stuff'

        )
        break
}

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' })
}

function installNewPkg(pkgs) {
    let command = ['i','-D','--prefix','_project/_frontend']
    command.splice.apply(command, [2,0].concat(pkgs))

    console.log(chalk.yellow(`Runa is fetching and installing ${pkgs.join(', ').replace(/, ([^,]*)$/, ' and $1')}.`))
    run('npm', command)
}