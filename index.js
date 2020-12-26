console.log("sanity check");

const message = document.querySelector(".message");
const buttons = document.querySelectorAll(".button");
const score = document.querySelector(".score");

// adding event listeners to buttons

for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', play);
}




function play(e) {
    // set up players selection
    // set up random number as computer's choice
    // if computer's number < .34, Rocks
    // if computer's number <= .67, Paper
    // else Scisssors
    // set up a function to compare the results
    // add scores to DOM
    // if (result === "Player"){
    //     result += "wins!!!"
    //     winnerScores[0]++;
    // }
    // put score into score div

}

function checkForWinner(player, computer) {
    if (player === computer) {
        return "It's a draw";
    }
    if (player === "Rock"){
        if(computer === "Paper"){
            return "Computer wins";
        } else {
            return "Player wins";
        }
    }

    if (player === "Paper"){
        if (computer === "Scissors"){
            return "Computer wins";
        } else {
            return "Player wins";
        }
    }

    if (player === "Scissors"){
        if (computer === "Rock"){
            return "Computer wins";
        } else {
            return "Player wins";
        }
    }
}
