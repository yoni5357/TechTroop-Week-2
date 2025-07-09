// Ex1
const isEven = function(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

// Ex2
const printOddNumbers = function(arr) {
    for(num of arr) {
        if (!isEven(num)) {
            console.log(num);
        }
    }
}

// Ex3
const checkExists = function(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

//Ex4
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))


// Ex5

const increaseByNameLength = function(money, name) {
    return money * name.length;
}

const makeRegal = function(name) {
    return "His Royal Highness, " + name;
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)


// Ex6
const printArmstrongNumbers = function() {
    for(let i = 100; i <1000; i++){
        let sum = 0;
        let num = i.toString();
        for(let j = 0; j < num.length; j++) {
            sum += Math.pow(parseInt(num[j]), 3);
        }
        if (sum === i) {
            console.log(i + " is an Armstrong number.");
        }
    }
}

printArmstrongNumbers();


// Functions Galore
// Ex1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const getAge = function(age) {
    if (age < 21) {
        return "an underage";
    }
    else if (age < 55) {
        return `${age} years old`;
    }
    else {
        return "a 55+";
    }
}

const getProfession = function(person) {
    let words = person.profession.split(" ");
    let profession = ""
    for (let word of words) {
        profession += capitalize(word) + " ";
    }
    return `is a ${profession.trim()}`; // trim() removes trailing spaces
}

const getCountryAndCity = function(person) {
  return `${capitalize(person.city)}, ${capitalize(person.country)}`
}

const getCatchphrase = function(person) {
    let firstWord = person.catchphrase.split(" ")[0];
    let capitalizeFirstWord = capitalize(firstWord);
    person.catchphrase = person.catchphrase.replace(firstWord, capitalizeFirstWord);
    return `${capitalize(person.name)} loves to say: "${person.catchphrase}"` 
}



const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary +=  getProfession(person)
  summary += ` from ${getCountryAndCity(person)}. `
  summary += getCatchphrase(person)
  return summary
}

console.log(getSummary(people_info[0]))
console.log(getSummary(people_info[1]))
console.log(getSummary(people_info[2]))

// Ex2
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const cleanText = function(sentence){
    let cleanedSentence = sentence.split(" ")
    for(let i = 0; i < cleanedSentence.length; i++){
        cleanedSentence[i] = cleanedSentence[i].toLowerCase();
        for(let char of specialChars) {
            cleanedSentence[i] = cleanedSentence[i].replace(char, "");
        }
    }
    return cleanedSentence;
}

const addToCounter = function(word){
    if (wordCounts[word]) {
        wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }
}

const countWords = function(text) {
    let cleanedText = cleanText(text);
    for(let word of cleanedText) {
        addToCounter(word);
    }
}

countWords(story)
console.log(wordCounts);