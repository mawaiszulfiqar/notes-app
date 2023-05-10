const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

//const msg1 = msg()
//console.log(process.argv)
//console.log(yargs.argv)

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
                        describe: 'Note body',
                        demandOption: true,
                        type: 'string'
                }
	},
	handler(argv) {
		notes.addNote(argv.title,argv.body)
	}
})

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
                title: {
                        describe: 'Note title',
                        demandOption: true,
                        type: 'string'
                }
        },
        handler(argv) {
                notes.removeNote(argv.title)
        }

})

yargs.command({
        command: 'list',
        describe: 'List all notes',
        handler() {
                console.log('Your Notes!')
		notes.listNote()
        }
})

yargs.command({
        command: 'read',
        describe: 'Read a note',
	builder: {
                title: {
                        describe: 'Note title',
                        demandOption: true,
                        type: 'string'
                }
        },
        handler(argv) {
                notes.readNote(argv.title)
        }
})

yargs.parse()
//console.log(yargs.argv)

//console.log(chalk.green('Success!\n'))

//console.log(chalk.bgGreen.bold('Success!'))
