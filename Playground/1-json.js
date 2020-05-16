const fs = require('fs')

// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

const dataBuffer = fs.readFileSync("1-json.json")

const data = dataBuffer.toString()
const parsedJSON = JSON.parse(data)
parsedJSON.name = 'Captain America'
parsedJSON.age = 30

const stringfiedJSON = JSON.stringify(parsedJSON)
fs.writeFileSync('1-json.json', stringfiedJSON)