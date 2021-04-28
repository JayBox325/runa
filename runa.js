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
            installNewPkg(process.argv[3])
        }
        break

    case 'watch':
    case 'dev':
    case 'wait':
        console.log(chalk.yellow('👀 Runa is watching and waiting for commands...'))
        run('npm', ['run', 'watch', '--prefix', '_project/_frontend'])
        break

    case 'add':
    case 'fetch':
        console.log(chalk.yellow(`🦴 Runa is fetching ${process.argv[3]} and installing it!`))
        run('npm', ['i','-D',process.argv[3],'--prefix','_project/_frontend'])
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

function installNewPkg(pkg) {
    console.log(chalk.yellow(`Runa is adding ${pkg}`))
    run('npm', ['i','-D',pkg,'--prefix','_project/_frontend'])
}