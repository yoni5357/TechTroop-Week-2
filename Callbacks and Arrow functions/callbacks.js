//Ex1
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function (callback) {
    callback()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//Ex2
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function(callback){
    callback(new Date().toLocaleTimeString())
}

getTime(returnTime)

//Ex3
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(data) {
  console.log("Logged data: " + data);
}

displayData(console.error, logData, "I like to party")