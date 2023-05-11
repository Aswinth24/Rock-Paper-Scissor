 const btn=document.querySelectorAll('.btn');
 const playerText=document.querySelector('#player-choice');
 const computerText=document.querySelector('#comp-choice');
 const playerScore=document.querySelector('#man-score');
 const ComputerScore=document.querySelector('#com-score');
 const result=document.querySelector('#result');
let player;
let computer;
let pScore=0;
let cScore=0;

btn.forEach(button=>button.addEventListener('click',()=>{
     player=button.textContent;
     computerChoice();   
     updateScore();
     updateChoices();
     
}));
function computerChoice(){
      const arr=['✊','🖐️','✌️'];
      const rand=Math.floor(Math.random()*arr.length);
      computer=arr[rand];     
}
function updateChoices()
{
    playerText.textContent=player;
    computerText.textContent=computer;
    playerScore.textContent=pScore;
    ComputerScore.textContent=cScore;
}
function updateScore(){
    if(player=='✊'&&computer=='✊'||
    player=='✌️'&&computer=='✌️'||
    player=='🖐️'&&computer=='🖐️')
    {
      result.textContent='Tie.'
    }
    else if(player=='✌️'&&computer=='✊'||player=='🖐️'&&computer=='✌️'||player=='✊'&&computer=='🖐️'){
        cScore++;
        result.textContent='You Lose.'
    }
   else{
    pScore++;
    result.textContent='You Win.'
   }
}