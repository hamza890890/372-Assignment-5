// Player and computer choices
let choices = document.querySelectorAll("#player-throw img");
let computerImg = document.querySelector("#computer-img");
let computerCaption = document.querySelector("#computer-caption");
let resultText = document.querySelector("#result-text");

let choiceArray = ["rock", "paper", "scissors"];
let imagePaths = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissors: "images/scissors.png"
};

// Add click events to player images
choices.forEach(function(choice) {
  choice.addEventListener("click", function() {
    // Highlight player choice
    choices.forEach(function(c) {
      c.classList.remove("selected");
    });
    choice.classList.add("selected");

    // Start computer shuffle
    startComputerTurn(choice.id);
  });
});

// Function to handle computer turn
function startComputerTurn(playerChoice) {
  let counter = 0;

  // Shuffle every 500ms
  let shuffleId = setInterval(function() {
    let randomIndex = Math.floor(Math.random() * 3);
    let tempChoice = choiceArray[randomIndex];
    computerImg.src = imagePaths[tempChoice];
    computerCaption.textContent = tempChoice;
    counter++;
  }, 500);

  // Stop shuffle after 3 seconds
  setTimeout(function() {
    clearInterval(shuffleId);

    // Final random choice
    let finalChoice = choiceArray[Math.floor(Math.random() * 3)];
    computerImg.src = imagePaths[finalChoice];
    computerCaption.textContent = finalChoice;

    // Decide winner
    let result = decideWinner(playerChoice, finalChoice);
    resultText.textContent = result;
  }, 3000);
}

// Function to decide winner
function decideWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
