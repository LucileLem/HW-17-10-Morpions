var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');
var gagnant_text = document.getElementById('gagnant');
var restart = document.getElementById('restart');

restart.addEventListener('click', restartGame);

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
		}
	});
});

var afficherSymbole = function(cell) {
	// Verifier si la case est remplie ou pas
	if (!cell.innerHTML) {
		// Poser symbole J1 ou j2
		if (tourDuJoueur1) {
			var cross = document.createElement("img");
			cross.src = '../img/cross.png';
			cross.height = 164;
			cross.width = 154;
			cell.appendChild(cross);
		} else {
			var circle = document.createElement("img");
			circle.src = '../img/circle.png';
			circle.height = 164;
			circle.width = 154;
			cell.appendChild(circle);
		}
		verifierCombinaisons();
	}
};

//Combinaisons : hori / verti / diagonales
var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function() {
	// Check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		if (cells[combinaison[0]].innerHTML === cells[combinaison[1]].innerHTML &&
			cells[combinaison[1]].innerHTML === cells[combinaison[2]].innerHTML &&
			cells[combinaison[0]].innerHTML !== '')
		{
			console.log('WIN');
			gagnant_text.style.display = 'block';
			gagnant_text.innerHTML = 'Bravo ' + (tourDuJoueur1 ? 'joueur 1' : 'joueur 2') + '!';
			restart.style.display = 'block';
			partieGagnee = true;
		}
	});
	// Changer le joueur courant
	tourDuJoueur1 = !tourDuJoueur1;
};

// Recommencer
function restartGame(){
	partieGagnee = false;
	cells.forEach(cell => cell.innerHTML = '');
	gagnant.style.display = 'none';
	restart.style.display = 'none';
	tourDuJoueur1 = true;
}
