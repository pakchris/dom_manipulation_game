var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;

document.getElementById('player'+activePlayer+'current').textContent = dice;