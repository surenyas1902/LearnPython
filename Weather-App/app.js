const request = require("request")
// const request = require("postman-request")

const url = "http://api.weatherstack.com/current?access_key=c5f720cf5f8eb1da3a43be7a606b7e03&query=Arakkonam&units=f"
request({url: url, json: true}, (error, response) => {
    const current = response.body.current;
    console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like "+ current.feelslike + " degrees out.")
})