const https = require('https')
const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/Arakkonam.json?access_token=pk.eyJ1Ijoic3VyZW55YXMxOTAyIiwiYSI6ImNrYWJ5ZHRreDFiY3Iyc210dnRjbHB3Y2wifQ.kitN6lIZN2RDQv78GFQyaw&limit=1';

const request = https.request(url, (response)=> {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log("An Error, ", error)
})

request.end()