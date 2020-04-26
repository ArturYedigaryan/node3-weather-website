const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=00475b0cf4644bf2be9223504202204&q=${longitude},${latitude}`
  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to weather service!', undefined);
    } else if(body.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        img:`${body.current.condition.icon}`,
        text: `${body.current.condition.text}. It is currently ${body.current.temp_c} degrees out. There is a ${body.current.precip_in}% chance of rain.`
      });
    }
  });
}

module.exports = forecast;