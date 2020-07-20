const request = require("request")
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c3850b970804b52de86ade959a175c86&query=' + latitude + ',' + longitude + '&units=f'
    request({uri:url, json:true}, (error, {body})=> {
        if(error){
            callback('Unable to reach api call', undefined)
        } else if(body.error){
            callback('Error in the input', undefined)
        } else {
            callback(undefined, 'Current Temperature ' + body.current.temperature + ' at location ' + body.location.name
            )
        }
    })
}

module.exports = forecast