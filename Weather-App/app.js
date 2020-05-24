const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

/* With using Yargs - Start */

    // const yargs = require('yargs')

    // yargs.command({
    //     command: "location",
    //     describe: "Enter a location",
    //     builder: {
    //         name: {
    //             describe: "Enter Location Name",
    //             demandOption: true,
    //             type:'string'
    //         }
    //     },
    //     handler(argv) {
            
    //         const locName = argv.name
    //         if (locName === '') {
    //             console.log("Please enter the location name")
    //             return
    //         }
    //         getWeatherService(locName)
    //     }
    // })

/* With using Yargs - End */
const getWeatherService = (locName) => {
    geocode(locName, (error, data) => {
        if (error) {
            console.log(error)
            return;
        }
        const lat = data.latitude;
        const long = data.longitude;
        const placename = data.place_name;
        forecast(lat, long ,(error, data) => {
            if (error) {
                console.log(error);
                return
            }
            console.log('The atmosphere in ' + placename + ' is ' + data.description + '. Actual temperature is ' + data.temp +' degrees. But it feels like '+ data.feelslike + ' degrees.')
        })
    })
}

/* With using Without Yargs - Start */
const args = process.argv;
if (args.length > 3) {
    console.log("Please enter the location in double or single quotes if location contains spaces")
    return;
}
const loc = args[2];
if (loc === undefined || loc === '') {
    console.log("Please send the location arguments")
    return;
}
getWeatherService(loc);
/* With using Yargs - End */
// if (yargs.argv._.length === 0) {
//     console.log("app command needs atleast 1 parameters")
// }