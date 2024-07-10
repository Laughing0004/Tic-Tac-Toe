// Selecting Elements from DOM
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let startBtn = document.querySelector("#start-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");
let container = document.querySelector(".container");
let player1Name, player2Name;

// Turn Tracking Variable
let turnO = true;

// Winning Patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// Function to Start Game
const startGame = () => {
    player1Name = player1Input.value || "Player 1";
    player2Name = player2Input.value || "Player 2";
    container.classList.remove("hide");
    startBtn.classList.add("hide");
    player1Input.classList.add("hide");
    player2Input.classList.add("hide");
    resetBtn.classList.remove("hide");
};

// Reset Game Function
const resetGame = () => {
    turnO = true;
    enableBoxes(); // Enable boxes for new game
    msgContainer.classList.add("hide"); // Hide the message container
};

// Add Click Event to Boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { // Player O's turn
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        } else { // Player X's turn
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// Function to Disable Boxes After Winner is Found
const disableBoxes = () => { 
    for(let box of boxes) {
        box.disabled = true;
    }
};

// Function to Enable Boxes for New Game
const enableBoxes = () => { 
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";  // Clear the box text
        box.classList.remove("o", "x"); // Remove class for color
    }
};

// Function to Show Winner
const showWinner = (winner) => {
    const winnerName = winner === "O" ? player1Name : player2Name;
    msg.innerText = `Congratulations!
     Winner is ${winnerName}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); // Disable boxes
};

// Function to Check Winner
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

// Event Listeners for New Game and Reset Buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
startBtn.addEventListener("click", startGame);

// Star Background Initialization
document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        starsContainer.appendChild(star);
    }
});
``
