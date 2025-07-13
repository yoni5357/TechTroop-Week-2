import promptSync from 'prompt-sync'

const prompt = promptSync();

const quiz = [{q:"What's A? ",a: "B"},{q:"How about C? ", a:"D"},{q:"Great, now what's your PIN code? ", a:"what?"}]

function beginQuiz(){
    let i = 0;
    let correct = 0
    while(i < 3){
        const input = prompt(quiz[i].q)
        correct = input === quiz[i].a ? correct+=1 : correct
        i++
    }

    console.log(`Final Score: ${correct}/3 correct!`)
}

beginQuiz()