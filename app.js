let userScr=0;
let compScr=0;
const choices=document.querySelectorAll(".choice");
const msgbox=document.querySelector(".msg");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");
const round=document.querySelector("#round");let rnd=0;
const restartButton = document.getElementById("restartButton");
let gameActive=true;

const restartGame = () => {
  gameActive=true;
  userScr = 0;
  compScr = 0;
  rnd = 0;
  userScore.innerText = userScr;
  compScore.innerText = compScr;
  round.innerText = `Round ${rnd}`;
  msgbox.innerText = "One who reaches 10 first wins.";
  msgbox.style.backgroundColor = "#988CED"; // Set background color to default
};



const displayFinalWinner=(userScr,compScr)=>{
  if(userScr>compScr){
    msgbox.innerText="Congrats!You are the final winner.";
  }
  else if(userScr<compScr){
    msgbox.innerText="Better luck next time!!";
  }
  else{
    msgbox.innerText="Draw!";
  }
  round.innerText="Play Again!!";
  round.addEventListener("click",restartGame);
}
const genCompChoice=()=>{
  const options=["Rock","Paper","Scissors"];
  const ranIn=Math.floor(Math.random()*3);
  return options[ranIn];
}
const displayRound=(rnd)=>{
  round.innerText=`Round ${rnd}`;
}
const drawGame=(userChoice,compChoice)=>{
  console.log("It's a DRAW");
  msgbox.innerText=`Draw!Play again`;
  msgbox.style.backgroundColor="#988CED";
}
const loseGame=(userChoice,compChoice)=>{
  console.log("Alas,you LOST!!");
  compScr++;
  msgbox.innerText=`You Lose!${compChoice} beats ${userChoice}`;
  msgbox.style.backgroundColor="#EB392C";
  compScore.innerText=compScr;

}
const winGame=(userChoice,compChoice)=>{
  console.log("Hey,you WON!!");
  userScr++;
  msgbox.innerText=`You Win!${userChoice} beats ${compChoice}`;
  msgbox.style.backgroundColor="#3BB028";
  userScore.innerText=userScr;
}
const playGame=(userChoice)=>{
console.log("User choice was=",userChoice);
const compChoice=genCompChoice();
console.log("Computer choice was=",compChoice);
if(userChoice===compChoice){
  // draw
  drawGame(userChoice,compChoice);
}
else{
  let userWin=true;
  if(userChoice==="Rock"){
    if(compChoice==="Paper"){
      userWin=false;
    }
  }
  if(userChoice==="Paper"){
    if(compChoice==="Scissors"){
      userWin=false;
    }
  }
  if(userChoice==="Scissors"){
    if(compChoice==="Rock"){
      userWin=false;
    }
  }
  if(userWin===false){
    loseGame(userChoice,compChoice);
  }
  else if(userWin===true){
    winGame(userChoice,compChoice);
  }
}

}



choices.forEach((choice)=>{
   console.log(choice);
   choice.addEventListener("click",()=>{
   if(gameActive){
    const userChoice=choice.getAttribute("id");
    rnd++;
   playGame(userChoice);displayRound(rnd);
   if(userScr===10 || compScr===10){
    displayFinalWinner(userScr,compScr);
    gameActive=false;
   }}
  });
});
