//Ex1
const calculator = function(num1, op, num2){
    if(op === "+"){
        let res = parseInt(num1) + parseInt(num2)
        console.log(`${num1} ${op} ${num2} = ${res}`)
    }
    else if(op === "-"){
        let res = parseInt(num1) - parseInt(num2)
        console.log(`${num1} ${op} ${num2} = ${res}`)
    }
    else if(op === "*"){
        let res = parseInt(num1) * parseInt(num2)
        console.log(`${num1} ${op} ${num2} = ${res}`)
    }
    else{
        if(num2 === "0"){
            console.log("Cant devide by zero")
            return
        }
        let res = parseInt(num1) / parseInt(num2)
        console.log(`${num1} ${op} ${num2} = ${res}`)
    }
}

calculator(process.argv[2], process.argv[3], process.argv[4])