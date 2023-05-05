const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=08fb793a0ce81330beae2d4299944e7d&query=' + latitude + ',' + longitude + '&units=f'

    const celsius = (unit) => {
            return (unit - 30)/2
    }

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + celsius(body.current.temperature) + ' °C out there. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast