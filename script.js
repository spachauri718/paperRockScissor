let userScore =0;
let computerScore =0;

let options = document.querySelectorAll(".option");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector(".userScorePara");
const computerScorePara = document.querySelector(".computerScorePara");


const drawGame = ()=>{
    console.log("the game is drawn");
    msg.innerText = "The game is drawn"
}
const userWin = ()=>{
    console.log("the game is user");
    userScore++;
    updateScore()
    msg.innerText = "You Wins!!"

}
const userLose = ()=>{
    console.log("the game is computer");
    computerScore++;
    updateScore()
    msg.innerText = "You lose"

}

const updateScore = ()=>{
    console.log("we are reaching here");
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
}


const gameBegin = (userOption,computerOption) =>{
    console.log("user select", userOption)
    console.log("computer select" ,computerOption) 


    if(userOption==computerOption){
        drawGame();
    }
    else{
        if(userOption=="rock"){
            if(computerOption=="scissor"){
               userWin()
            }
            else{
               userLose()
            }
        }
        
        else if(userOption=="paper"){
            if(computerOption=="rock"){
               userWin()
            }
            else{
                userLose()
            }
        }

        else {
            if(computerOption=="paper"){
                userWin()
            }
            else{
              userLose();
            }
        } 
    }


}

const generateComputerOption = ()=>{
    const optionsArray = ["paper","rock","scissor"];
    return optionsArray[Math.floor(Math.random()*optionsArray.length)]
}

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userOption = option.getAttribute("id")
      
        const computerOption = generateComputerOption();
      
        gameBegin(userOption,computerOption);
    })
})

