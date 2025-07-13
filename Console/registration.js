import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInfo = {
    fname: null,
    email: null,
    age: null,
    favorite_color: null
}

rl.question("Enter your first name ", (answer) => {
    userInfo.fname = answer
    rl.question("Enter your Email ", (answer) =>{
        userInfo.email = answer
        rl.question("Enter your age ", (answer) =>{
            userInfo.age = answer
            rl.question("Enter your favorite color ", (answer) =>{
                userInfo.favorite_color = answer
                    console.log("Registration Summery:")
                    console.log(`Name: ${userInfo.fname}`)
                    console.log(`Email: ${userInfo.email}`)
                    console.log(`age: ${userInfo.age}`)
                    console.log(`Favorite Color : ${userInfo.favorite_color}`)
                rl.close()
            })
        })
    })
})
