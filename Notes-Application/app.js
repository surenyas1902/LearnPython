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
const msg = notesModule()
console.log(msg)

console.log(validator.isEmail('surenyas1902@gmail.com'))

const chalk = require('chalk') //Print the data in different colors and styles
const greenMsg = chalk.green.bold.inverse('Success!')
console.log(greenMsg)