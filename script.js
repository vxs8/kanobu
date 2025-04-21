let player1 = true;
	let player2 = false;

	let player1_Choice = null;
	let player2_Choice = null;

	elem1 = document.querySelector('.choice-player-1');
	elem2 = document.querySelector('.choice-player-2');

	let info = document.querySelector(".info")

document.addEventListener("keydown", function(arg)
{
	if(player1 == true && player2 == false)
	{
		//1 игрок
		if(arg.code == "KeyA"){
			console.log("Нажата клавиша А");
			player1 = false
			player2 = true
			player1_Choice = "камень"
			info.innerHTML = "Игрок 2 ходит!"
		} else if (arg.code == "KeyS"){
			console.log("Нажата клавиша S");
			player1 = false
			player2 = true
			player1_Choice = "ножницы"
			info.innerHTML = "Игрок 2 ходит!"
		} else if(arg.code == "KeyD"){
			console.log("Нажата клавиша D");
			player1 = false
			player2 = true
			player1_Choice = "бумага"
			info.innerHTML = "Игрок 2 ходит!"
		}
	}

		
	if(player1 == false && player2 == true)
	{
		//2 игрок
		if(arg.code == "KeyJ"){
			console.log("Нажата клавиша J");
			player2_Choice = "камень"
			player1 = null;
			player2 = null;
			setTimeout(showChoice, 500);
			setTimeout(finish, 1000)
		} else if (arg.code == "KeyK"){
			console.log("Нажата клавиша K");
			player2_Choice = "ножницы"
			player1 = null;
			player2 = null;
			setTimeout(showChoice, 500);
			setTimeout(finish, 1000)

		} else if(arg.code == "KeyL"){
			console.log("Нажата клавиша L");
			player2_Choice = "бумага"
			player1 = null;
			player2 = null;
			setTimeout(showChoice, 500);
			setTimeout(finish, 1000)
		}
	}


		
})

let showChoice = function() {
	if (player1_Choice == 'камень') {
		elem1.style.backgroundImage = 'url(kamen.jpeg)';
		elem1.style.backgroundSize = '100% 100%';
	}
	else if (player1_Choice == 'ножницы') {
		elem1.style.backgroundImage = 'url(scissors.jpeg)';
		elem1.style.backgroundSize = '100% 100%';
	}
	else if (player1_Choice == 'бумага') {
		elem1.style.backgroundImage = 'url(bumaga.jpeg)';
		elem1.style.backgroundSize = '100% 100%';
	}
	if (player2_Choice == 'камень') {
		elem2.style.backgroundImage = 'url(kamen.jpeg)';
		elem2.style.backgroundSize = '100% 100%';
	}
	else if (player2_Choice == 'ножницы') {
		elem2.style.backgroundImage = 'url(scissors.jpeg)';
		elem2.style.backgroundSize = '100% 100%';	}
	else if (player2_Choice == 'бумага') {
		elem2.style.backgroundImage = 'url(bumaga.jpeg)';
		elem2.style.backgroundSize = '100% 100%';
	}
}

function finish() {
	if (player1_Choice == player2_Choice) {
		alert('Ничья')
	}
	if (player1_Choice == 'камень' && player2_Choice == 'ножницы') {
		alert('Игрок 1 выиграл')
	}
	if (player1_Choice == 'ножницы' && player2_Choice == 'бумага') {
		alert('Игрок 1 выиграл')

	}
	if (player1_Choice == 'бумага' && player2_Choice == 'камень') {
		alert('Игрок 1 выиграл')
	}
	if (player1_Choice == 'камень' && player2_Choice == 'бумага') {
		alert('Игрок 2 выиграл')
	}
	if (player1_Choice == 'ножницы' && player2_Choice == 'камень') {
		alert('Игрок 2 выиграл')
	}
	if (player1_Choice == 'бумага' && player2_Choice == 'ножницы') {
		alert('Игрок 2 выиграл')
	}
}
