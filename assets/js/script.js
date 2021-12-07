let getBtnPlay = document.getElementById("btnPlay");
let getPlayer1 = document.getElementById("joueur1");
let getPlayer2 = document.getElementById("joueur2");
let scoreJoueur1 = 0;
let scoreJoueur2 = 0;
let getScorePlayer1 = document.getElementById("scorePlayer1");
let getScorePlayer2 = document.getElementById("scorePlayer2");
let getResetBtn = document.getElementById("resetBtn");

getBtnPlay.addEventListener("click", function(e){
    e.preventDefault();
    let signPlayer1 = randomNumberInt(1,3);
    let signPlayer2 = randomNumberInt(1,3);
    console.log(signPlayer2);
    console.log(signPlayer1);
    displaySign(getPlayer1,signPlayer1);
    displaySign(getPlayer2,signPlayer2);
    evaluatResult(signPlayer1,signPlayer2);
});

getResetBtn.addEventListener("click", function(e){
    e.preventDefault();
    scoreJoueur1 = 0;
    scoreJoueur2 = 0;
    displayScore(scoreJoueur1,getScorePlayer1);
    displayScore(scoreJoueur2,getScorePlayer2);
});

function displaySign(player,sign){
    switch(sign){
        case 1:
            player.innerText = "Ciseau";
            console.log("ciseau");
            break;
        case 2:
            player.innerText = "Pierre";
            console.log("pierre");
            break;
        case 3:
            player.innerText = "Feuille";
            console.log("feuille");
            break;
        default:
            player.innerText = "Error";
    }
}

function randomNumberInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function evaluatResult(signPlayer1,signPlayer2){
    if(signPlayer1 != signPlayer2){
        if(signPlayer1 == 1 && signPlayer2 == 2)
        {
            scoreJoueur2++;
            displayScore(scoreJoueur2,getScorePlayer2);
        }else if(signPlayer1 == 1 && signPlayer2 == 3){
           scoreJoueur1++;
           displayScore(scoreJoueur1,getScorePlayer1);
        }else if(signPlayer1 == 2 && signPlayer2 == 3){
            scoreJoueur2++;
            displayScore(scoreJoueur2,getScorePlayer2);
        }else if(signPlayer1 == 2 && signPlayer2 == 1){
           scoreJoueur1++;
           displayScore(scoreJoueur1,getScorePlayer1);
        }else if(signPlayer1 == 3 && signPlayer2 == 1){
            scoreJoueur2++;
            displayScore(scoreJoueur2,getScorePlayer2);
        }else{
           scoreJoueur1++;
           displayScore(scoreJoueur1,getScorePlayer1);
        }
    }else{
        //Egalité
    }
}

function displayScore(scoreJoueur, winner){
    let player = winner.id.substring(11,12);
    winner.innerText = "Score Joueur " + player + ": " + scoreJoueur;
}
