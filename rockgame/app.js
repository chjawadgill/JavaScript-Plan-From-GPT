let userScore = 0;
let computerScore = 0;

genComputerChoice = () => {
    const choices =['rock', 'paper' , 'scissors'];
    let index = Math.floor(Math.random()*3);
    return(choices[index]);
} 

const playGame = (userChoise) => {
    console.log(`Playing game with user choice: ${userChoise}`);
    console.log(`Computer choice: ${genComputerChoice()}`);

}

let choices = document.querySelectorAll(".choice");
choices.forEach( (choice) => {
    choice.addEventListener("click", ()=> {
        const userChoise = choice.getAttribute("id");
        playGame (userChoise);

    })
    
    })