var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector('#player'+activePlayer+'current p').textContent = dice; // document.querySelector('#player'+activePlayer+'current p').innerHTML = '<em>'+dice+'</em>';

// var playerScore = document.querySelector('#player'+activePlayer+'score').textContent;

document.querySelector('#dice').style.display = 'none';

document.getElementById('player1score').textContent = '0';
document.getElementById('player2score').textContent = '0';

document.getElementById('player1current').textContent = '0';
document.getElementById('player2current').textContent = '0';

document.querySelector('#rolldice').addEventListener('click', rollFunc); // document.querySelector('#rolldice').addEventListener('click', function(){});

function rollFunc(){
	var dice = Math.floor(Math.random() * 6) + 1;
	// display result
	var diceDom= document.querySelector('#dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-'+dice+'.png';
	// update round score if rolled # is not 1
	if(dice !== 1){
		roundScore += dice;
		document.querySelector('#player'+activePlayer+'score').textContent = roundScore;
	} else{
		activePlayer === 1 ? activePlayer = 2 : activePlayer = 0;
		// if(activePlayer === 0) activePlayer = 1;
		// else activePlayer = 0;
	}

}


