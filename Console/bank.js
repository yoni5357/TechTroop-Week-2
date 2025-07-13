import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const bank = {
    balance : 0
}

const bankActions = {"1": checkBalance, "2": deposit, "3": withdraw, "4": () => rl.close()}

function showMenu(){
    console.log("=== Banking System ===")
    console.log("1) Check Balance")
    console.log("2) Deposit Money")
    console.log("3) Withdraw Money")
    console.log("4) Exit")
    rl.question("Choose option (1-4):" , handleUserInput)
}

function handleUserInput(answer){
    switch(answer){
        case "1":
            checkBalance()
            break
        case "2":
            deposit()
            break
        case "3":
            withdraw()
            break
        case "4":
            rl.close()
            break
        default:
            console.log("Invalid option.")
            showMenu()
    }
}


function checkBalance(){
    console.log( `You have ${bank.balance} in your account`)
    showMenu()
}

function deposit(){
    rl.question("Enter amount: ", (answer) =>{
        bank.balance += parseInt(answer)
        console.log( `You have ${bank.balance} in your account`)
        showMenu()
    })
}

function withdraw(){
    rl.question("Enter amount: ", (answer) =>{
        if(bank.balance - parseInt(answer) < 0){
        console.log("Not enough money in account")
        showMenu()
    }
    else{
        bank.balance -= parseInt(answer)
        console.log(`You now have ${bank.balance} in your account`)
        showMenu()
    }
    })

}

showMenu()

