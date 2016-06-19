//TREEHOUSE TUTORIAL
//Problem: Fetch today's forecast
//Solution: Use Node.js to connect to forecast.io API to get today's forecast summery.
var https = require("https");
var url = "https://api.forecast.io/forecast/fbd89997d3b1d93081eef7d35698d381/";

//Print out message
function printMessage(forecast) {
    var message = "Currently it will " + forecast;
    console.log(message);
}

//Print out error messages
function printError(error) {
    console.error(error.message);
}

function getWeatherData(latitude, longitude) {
    var request = https.get(url + latitude + "," + longitude, function (response) {
        var body = "";
        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var weatherData = JSON.parse(body);
                    //Print the data
                    printMessage(weatherData.currently.summary);
                } catch (error) {
                    //Parse Error
                    printError(error);
                }
            } else {
                //Status Code Error
                printError({message: "There was an error getting the weather data for " + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }
        });


    });

//Connection Error
    request.on("error", printError);
}

//Make getWeatherData available to app.js as get
module.exports.get = getWeatherData;