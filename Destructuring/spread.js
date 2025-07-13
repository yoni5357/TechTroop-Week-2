

let [meatArr, ...vegetableArr] = [["beef","chicken","rabbit"], "carrots","potatoes","lettuce"]

console.log(meatArr)
console.log(vegetableArr)


var firstPiece = { id: 101, name: 'Ofri' }

var secondPiece = { country: 'Israel'}

var fullPassport = { ...firstPiece, ...secondPiece }

console.log(fullPassport)