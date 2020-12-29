// console.log("sanity check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const scoreTracker = [0,0];

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    // console.log("Clicking the shite out of it");
    buttons[i].addEventListener("click", play);
}

function play(e){
    // set up players selection
    let playersChoice = e.target.innerText;
    // set up random number as computers selection
    let computersChoice = Math.random();

    // if computer's number < .34, Rocks
    // if computer's number <= .67, Paper
    // else Scisssors
    if (computersChoice < .34){
        computersChoice = "Rock";
    } else if (computersChoice <= .67){
        computersChoice = "Paper";
    } else {
        computersChoice = "Scissors";
    }
    
    // just cover all the possible combinations
    function checkForWinner(human, machine){
        if (human === machine){
            return "Draw";
        }
    
        if (human === "Rock"){
            if(machine === "Paper"){
                return "Machine";
            } else {
                return "Human";
            }
        }
    
        if (human === "Paper"){
            if (machine === "Scissors"){
                return "Machine";
            } else {
                return "Human";
            }
        }
    
        if (human === "Scissors"){
            if (machine === "Rock"){
                return "Machine";
            } else {
                return "Human";
            }
        }
    }
    
    // set up a function to compare the results
    let result = checkForWinner(playersChoice, computersChoice);
    // add scores to DOM
    if (result === "Human"){
        result += " takes the cake!";
        scoreTracker[0]++;
    }

    if (result === "Machine"){
        result += " is coming to get you!";
        scoreTracker[1]++;
    }

    if (result === "Draw"){
        result += ". We are all losers!"
    }

    // put score into score div
    score.innerHTML = "Human: [ " + scoreTracker[0]+ " ] Machine: [ " + scoreTracker[1] + " ]";

    // player & computer selection output
    function displayMessage(selectionMessage){
    message.innerHTML = selectionMessage;
    }

    displayMessage("Human: " + playersChoice + " Machine: " + computersChoice + "<br>" + result);
}



