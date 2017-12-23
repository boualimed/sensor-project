//import the sensor library
const sensor = require('node-dht-sensor')

//the first argument is the sensor number. in this case 11 represents the DHT11 sensor

//the second argument is the pin number to read from, for this example, we have connected the signal pin to 4 pin
sensor.read(11, 4, function(err, temperature, humidity){
	//after reading the sensor, we get the temperature and humididty readings
if (!err) {

	//if there is no error, log the reading to the console
	console.log('temp: ' + temperature.toFixed(1) + '°C,' + humidity.toFixed(1) + '%')
}

});
