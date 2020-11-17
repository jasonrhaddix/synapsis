#!/usr/bin/env node
const figlet = require('figlet')
const chalk = require('chalk')


const run = async () => {
    console.clear()

    figlet.text('   Synapsis', {color: 'green'}, (err, data) => {
        console.log(chalk.gray('===================================================='))
        console.log(chalk.green(data))
        console.log(chalk.yellowBright('    https://github.com/jasonrhaddix/synapsis'))
        console.log(chalk.gray('===================================================='))
        console.log('')
        
        require('./lib/program')
    })
}

run()