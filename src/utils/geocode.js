const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=08fb793a0ce81330beae2d4299944e7d&query=" +
    address +
    "&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error.type === 'request_failed' ) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.location.lat,
        longitude: body.location.lon,
        location: body.location.name,
      }); 
    }
  });
};

module.exports = geocode;
