const request = require("request")
// const request = require("postman-request")

const url = "http://api.weatherstack.com/current?access_key=c5f720cf5f8eb1da3a43be7a606b7e03&query=Arakkonam&units=f"
request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather services.");
        return;
    } else if (response.body.success === false) {
        console.log("Unable to find location")
        return;
    }
    const current = response.body.current;
    console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like "+ current.feelslike + " degrees out.")
})

const coordurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Arakkonam.json?access_token=pk.eyJ1Ijoic3VyZW55YXMxOTAyIiwiYSI6ImNrYWJ5ZHRreDFiY3Iyc210dnRjbHB3Y2wifQ.kitN6lIZN2RDQv78GFQyaw&limit=1";
request({url: coordurl, json: true}, (error,response) => {
    if (error) {
        console.log("Unable to connect to weather services.");
        return;
    }
    else if (response.body.features.length === 0) {
        console.log("Unable to find location");
        return;
    }
    const data = response.body;
    const getCoordinates = data.features[0].center;
    const lat = getCoordinates[1]
    const long = getCoordinates[0]
    console.log("Latitude: " + lat + ", Longitude: " + long)
})