let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let display = document.querySelector(".screen");
let choice = document.querySelectorAll(".btn");
let playerWins=document.querySelector("#playerScore");
let compWins=document.querySelector("#compScore");
let reset=document.querySelector(".reset");
let ps=0;
let cs=0


let map = {
    1: "stone",
    2: "paper",
    3: "scissor"
};

const min = 1;
const max = 3;

choice.forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let computerChoice = map[randomNumber];

        // Here, you can display the choices and decide the winner
        console.log("Player choice:", playerChoice);
        console.log("Computer choice:", computerChoice);
        if (((playerChoice == "stone") && (computerChoice == "paper")) || ((playerChoice == "paper") && (computerChoice == "scissor")) || ((playerChoice == "scissor") && (computerChoice == "stone"))) {
            display.textContent = "Comp Wins!";
            cs+=1;
            compWins.textContent=cs;

        }
        else if (playerChoice == computerChoice) {
            display.textContent = "It's a draw!";
        }
        else {
            display.textContent = "Player Wins!";
            ps+=1;
            playerWins.textContent=ps;
        }
    });
});

reset.addEventListener("click",()=>{
    ps=0,cs=0;
    playerWins.textContent=ps;
    compWins.textContent=cs;
});


