        let humanScore = 0;
        let computerScore = 0;


        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3);

            if (random === 0) {
                return "rock";
            }
            else if (random === 1) {
                return "paper";
            }
            else {
                return "scissors";
            }
        }

        function getHumanChoice() {
            const buttons = document.querySelectorAll("button");

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    const humanChoice = button.id;
                    
                    playRound(humanChoice, getComputerChoice());
                })
            })
            
        }

        function playRound(humanChoice, computerChoice) {

            const div = document.querySelector(".roundResult");

            if ((humanChoice === "rock" && computerChoice === "rock") ||
                (humanChoice === "paper" && computerChoice === "paper") ||
                (humanChoice === "scissors" && computerChoice === "scissors")) {
                div.textContent = "Draw!";
            }

            else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore += 1;
                div.textContent = "Rock win!!1";
            }

            else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore += 1;
                div.textContent = "Rock win!!1";
            }

            else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore += 1;
                div.textContent = "Scissors win!!1";
            }

            else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore += 1;
                div.textContent = "Scissors win!!1";
            }

            else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore += 1;
                div.textContent = "Paper win!!1";
            }

            else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore += 1;
                div.textContent = "Paper win!!1";
            }

            
        }

        getHumanChoice();




