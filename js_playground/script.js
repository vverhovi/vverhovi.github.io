// Kelvin Weather

//the forecast for today in Kelvin
const kelvin = 210;
// console.log(kelvin);

//convert Kelvin to Celsius by subtracting
const celsius = kelvin - 273;
// console.log(celsius);

//calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// console.log(fahrenheit);

// round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert celsius to the Newton scale
let newton = celsius * (33/100);

newton = Math.floor(newton);
console.log(newton);
