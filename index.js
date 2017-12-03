var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#player'+activePlayer+'current p').textContent = dice;
// document.querySelector('#player'+activePlayer+'current p').innerHTML = '<em>'+dice+'</em>';

var playerScore = document.querySelector('#player'+activePlayer+'score').textContent;
console.log(playerScore);




