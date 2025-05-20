
const player1 = 'x';
const player2 = '0';
const winningCombinations = 24;
const winerPos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 7, 2, 5, 8, 3, 6, 9, 1, 5, 9, 3, 5, 7];
const maxPosition = 10;
const startCheck = 5;

let press = 0;
let player1Winner = 0;
let player2Winner = 0;
ressetButton();

function pressPosition(posPres) {
           if (press % 2 == 0) {
        document.getElementById(posPres).value = player1;
    } else {
        document.getElementById(posPres).value = player2;
    }
    document.getElementById(posPres).innerHTML = document.getElementById(posPres).value;
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
    for (let i = 0; i < winningCombinations; i += 3) {
        if (document.getElementById(winerPos[i]).value === document.getElementById(winerPos[i + 1]).value &&
        document.getElementById(winerPos[i + 1]).value === document.getElementById(winerPos[i + 2]).value) {
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
        document.getElementById('Message').innerHTML = "Winner player 1";
    } else if (player2Winner) {
        document.getElementById('Message').innerHTML = "Winner player 2";
    }
}

function ressetButton() {
    for (let i = 1; i < maxPosition; ++i) {
        document.getElementById(i).innerHTML = i;
        document.getElementById('Message').innerHTML = "";
        document.getElementById(i).value = i;
        player1Winner = 0;
        player2Winner = 0;
    }
    press = 0;
}