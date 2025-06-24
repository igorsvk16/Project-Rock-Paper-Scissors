        
        const computerScore = document.querySelector(".gameScoreComputer");
        const humanScore = document.querySelector(".gameScoreYour");
        let computerScoreNumber = 0;
        let yourScoreNumber = 0;

        function updateCountDisplay() {
             if (computerScoreNumber === 5) {
                const results = document.querySelector(".results")

                const winner = document.createElement("winnerShow");
                winner.textContent = "Computer Win!!!"
                results.appendChild(winner);
            } else if (yourScoreNumber === 5) {
                const results = document.querySelector(".results")

                const winner = document.createElement("winnerShow");
                winner.textContent = "You Win!!!"
                results.appendChild(winner);
            }
            computerScore.textContent = computerScoreNumber;
            humanScore.textContent = yourScoreNumber;

           
        }

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
            updateCountDisplay();

            
        }

        function playRound(humanChoice, computerChoice) {

            const div = document.querySelector(".resultsEveryRound");

            if ((humanChoice === "rock" && computerChoice === "rock") ||
                (humanChoice === "paper" && computerChoice === "paper") ||
                (humanChoice === "scissors" && computerChoice === "scissors")) {
                div.textContent = "Draw!";
                updateCountDisplay()
            }

            else if (humanChoice === "rock" && computerChoice === "scissors") {
                yourScoreNumber += 1;
                div.textContent = "Rock win!!1";
                updateCountDisplay()
            }

            else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScoreNumber += 1;
                div.textContent = "Rock win!!1";
                updateCountDisplay()
            }

            else if (humanChoice === "scissors" && computerChoice === "paper") {
                yourScoreNumber += 1;
                div.textContent = "Scissors win!!1";
                updateCountDisplay()
            }

            else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScoreNumber += 1;
                div.textContent = "Scissors win!!1";
                updateCountDisplay()
            }

            else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScoreNumber += 1;
                div.textContent = "Paper win!!1";
                updateCountDisplay()
            }

            else if (humanChoice === "paper" && computerChoice === "rock") {
                yourScoreNumber += 1;
                div.textContent = "Paper win!!1";
                updateCountDisplay()
            }

            
        }

         function playGame() {

            for (let i = 1; i < 6; i++) {

                let humanSelection = getHumanChoice();
                let computerSelection = getComputerChoice();

                console.log(`Round ${i} of 5`)
                playRound(humanSelection, computerSelection);
            }

            if (humanScore === computerScore) {
                return console.log("Draw!");
            }
            else if (humanScore < computerScore) {
                return console.log("Computer win");
            }
            else if (humanScore > computerScore) {
                return console.log("You win!!!!1");
            }
        }


        getHumanChoice();




