const matrix = document.getElementById("matrix");
const noCells = 9;
const winningCombinations = 8;
const winerPos = [
                    [1, 2, 3], 
                    [4, 5, 6], 
                    [7, 8, 9], 
                    [1, 4, 7], 
                    [2, 5, 8],
                    [3, 6, 9],
                    [1, 5, 9],
                    [3, 5, 7]
                ]
const maxPosition = 10;
const player1 = "X";
const player2 = "0";

let val = 0;
for (let i = 1; i <= noCells; ++i) {
    ++val;
    let currSquare = document.createElement("button");
    currSquare.value = val;
    currSquare.id = val;
    matrix.appendChild(currSquare); 
    console.log(i % 3);
    if (i % 3 === 0) {
        matrix.appendChild(document.createElement("br"));
    }
    document.getElementById(currSquare.id).setAttribute("onclick", "pressPosition(value)");
    document.getElementById(currSquare.id).innerHTML = val;
}   
let button = matrix.appendChild(document.createElement("button"));
button.id = "Reset";
document.getElementById(button.id).setAttribute("onclick", "resetButton()");
document.getElementById(button.id).innerHTML = "Reset";
let message = matrix.appendChild(document.createElement("p"));
message.id = "Message";
document.getElementById(message.id).innerHTML = "Message";
let press = 0;
let player1Winner = 0;
let player2Winner = 0;
let startCheck = 5; 

function pressPosition(pressPos) {
    if (press % 2 == 0) {
        document.getElementById(pressPos).value = player1;
    } else {
        document.getElementById(pressPos).value = player2;
    }
    document.getElementById(pressPos).innerHTML = document.getElementById(pressPos).value;
    ++press;
    if (press >= startCheck) {
        if (press % 2) {
            checkWinner(player1);
        } else {
            checkWinner(player2);
        }
    }
}

function checkWinner(player) {
    for (let i = 0; i < winningCombinations; ++i) {
        if (document.getElementById(winerPos[i][0]).value === document.getElementById(winerPos[i][1]).value && 
            document.getElementById(winerPos[i][1]).value === document.getElementById(winerPos[i][2]).value) {
            if (player === player1) {
                player1Winner = 1;
            } else if (player === player2) {
                player2Winner = 1;
            } 
        }
    }
    printMessage(player1Winner, player2Winner);
}

function printMessage(player1Winner, player2Winner) {
    if (player1Winner) {
        document.getElementById("Message").innerHTML = "Winner player 1";
    } else if (player2Winner) {
        document.getElementById("Message").innerHTML = "Winner player 2";
    }
}

function resetButton() {
    for (let i = 1; i < maxPosition; ++i) {
        document.getElementById(i).innerHTML = i;
        document.getElementById("Message").innerHTML = "Message";
        document.getElementById(i).value = i;
        player1Winner = 0;
        player2Winner = 0;
    }
    press = 0;
}
