const { argv } = require('yargs');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: "add body for array",
            demandOption: true,
            type : 'string'
        }
    },
    handler: function() {
        console.log('Value: ' + argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function() {
        console.log("removing note");
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function() {
        console.log("reading note");
    }
})

yargs.command({
    command: 'list',
    describe: 'list of a note',
    handler: function() {
        console.log("list of note");
    }
})

console.log(yargs.argv)

// const add = require('./utils.js')
// const sum = add(4,6)
// console.log(sum)

// const validator = require('validator')
// console.log(validator.isEmail('hello.....'))

// import chalk from 'chalk';

// const chalk = require('chalk')
// const greenMsg = chalk.green('Success...!');

// console.log(greenMsg);