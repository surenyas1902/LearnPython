/* Create a File using Node File System */
/* require is a module which need to be imported before the function use */

    // const fs = require('fs');
    // fs.writeFileSync("notes.txt", "File was created by Node.JS")

    // //#region Append the File by Filename. If file is not there, it will create the file.
    // fs.appendFileSync("notes.txt","\nThe second line was created") 
    // //#endregion

    /*Getting First Name from Utils
    const firstName = require('./utils')

    console.log(firstName);
    */

    /* Importing function from Utils
    const addition = require('./utils')
    const sum = addition(1,2)
    console.log(sum)
    */

const validator = require('validator') //Used to validate the data to any type
const notesModule = require('./notes.js')
const yargs = require('yargs')

    // const msg = notesModule()
    // console.log(msg)

    // console.log(validator.isEmail('surenyas1902@gmail.com'))

    // const chalk = require('chalk') //Print the data in different colors and styles
    // const greenMsg = chalk.red.bold.inverse('Success!')
    // console.log(greenMsg)

/*
Use 'nodemon' package from npm modules for continuosly running the file after file changes.
*/
yargs.version('1.1.0')

yargs.command({
    command: "add", //Arguments
    describe: "Add a new note",
    handler: function() {
        console.log("Adding a new note")
    }
})

yargs.command({
    command:"remove", // Arguments acts as command
    describe:"Remove a note",
    handler: function() {
        console.log("Removing a note")
    }
})

yargs.command({
    command:"list",
    describe:"List the Notes",
    handler: function() {
        console.log("List of notes displayed")
    }
})

yargs.command({
    command:"read",
    describe:"Read a Note",
    handler: function() {
        console.log("Reading the Note")
    }
})
console.log(yargs.argv)