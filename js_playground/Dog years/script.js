// Create a variable with your age
const myAge = 31;

//The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);

//how many years left if to subtract first 2 from myAge
laterYears = myAge - 2;

//Each year following equates to 4 dog years
laterYears *= 4;
console.log(laterYears);

//Learn how many years in dog years is my age
const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

const myName = 'VERANIka'.toLowerCase();
console.log(myName);

console.log(`My name is ${myName}. 
I am ${myAge} years old in human years which is ${myAgeInDogYears} 
years old in dog years.`)
