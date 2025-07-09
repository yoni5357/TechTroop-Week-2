//Ex1
const threeSum = (a,b,c) =>  a + b + c;

//Ex2
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//Ex3
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => "It`s " + determineWeather(temp)

console.log(commentOnWeather(30)) // returns "It's hot"
console.log(commentOnWeather(20)) // returns "It's cold"