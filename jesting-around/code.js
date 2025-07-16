class Excercises{
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr) {
        if (!Array.isArray(arr) || !arr.every(item => typeof item === 'boolean')) {
            throw new Error("Input must be an array of booleans")
        }
        if (arr.length === 0) {
            throw new Error("Need at least one boolean")
        }
        return arr.filter(item => item === true).length > arr.length / 2
    }

    add(x, y){
        let stuff = []
        stuff.push(x, y)
    }
}




module.exports = new Excercises();