
// Ex1
let age = 20;

if (age >= 18) {
    console.log("Old enough to vote.");
}else {
    console.log("Not old enough to vote.");
}

// Ex2
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// Ex3
let temperature = 20;
let weather = "sunny";

if (weather === "sunny"){
    if (temperature > 24){
        console.log("Go to the beach.");
    } 
    if (temperature <= 24 && temperature >= 15) {
        console.log("Go for a walk.");
    }
    else{
        console.log("Stay inside and read.");
    }
}

else if (weather === "rainy") {
    console.log("Stay inside and watch a read.");
}

else if (weather === "cloudy") {
    if (temperature > 21) {
        console.log("Go Hiking.");
    }
    else {
        console.log("Visit a museum.");
    }
}

// Ex4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;


let x = [ {human: {name: 'Daena', age: 31} } ][0].age ;
console.log(x);