const request = require('request');
const geocode = require('./callbacks');
const forecast = require('./forecast');
const address = process.argv[2];

if(!address){
    console.log('please provide an address')
} else {
geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
        return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
        return console.log(error);
        }
        console.log(forecastData);
        console.log(location);
       // console.log(data);
    })
})
}

// const url ='http://api.weatherstack.com/current?access_key=f6c88ffeb0f18e247e5dea4fb871a026&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('unable to connect to the weatherstack service...');
//     }else if(response.body.error){
//         console.log('unable to find location...');
//     } else {
//    console.log(response.body.current.weather_descriptions[0] + ' it is currently ' + response.body.current.temperature + ' degrees out. it feels like ' + response.body.current.feelslike + ' degrees out.');
//     }
// })

// const geocodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXNobGVzaGFhc2h0dXJlIiwiYSI6ImNsOG1vY2x4djFzNmkzd281ZmY2OHg4bzMifQ.KGpm3sVvg43D7EQaPV-NOg&limit=1';

// request({ url: geocodeurl, json: true }, (error, response) => {
//     if(error){
//         console.log('unable to connect to the geocode service...')
//     }else if(response.body.features.length === 0){
//         console.log('unable to find location...');
//     } else {
//    console.log(response.body.features[0].center[0] + ' = longitude, ' + response.body.features[0].center[1] + ' = latitude');
//     }
// })