document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'itachi',
			img: 'images/itachi.jpg'
		},
		{
			name: 'itachi',
			img: 'images/itachi.jpg'
		},
		{
			name: 'madara',
			img: 'images/madara.jpg'
		},
		{
			name: 'madara',
			img: 'images/madara.jpg'
		},
		{
			name: 'sasuke',
			img: 'images/sasuke.jpg'
		},
		{
			name: 'sasuke',
			img: 'images/sasuke.jpg'
		},
		{
			name: 'shisui',
			img: 'images/shisui.jpg'
		},
		{
			name: 'shisui',
			img: 'images/shisui.jpg'
		},
		{
			name: 'obito',
			img: 'images/obito.jpg'
		},
		{
			name: 'obito',
			img: 'images/obito.jpg'
		},
		{
			name: 'sharingan',
			img: 'images/sharingan.jpg'
		},
		{
			name: 'sharingan',
			img: 'images/sharingan.jpg'
		},
		{
			name: 'naruto',
			img: 'images/naruto.jpg'
		},
		{
			name: 'naruto',
			img: 'images/naruto.jpg'
		},
		{
			name: 'sasuke_face',
			img: 'images/sasuke_face.jpg'
		},
		{
			name: 'sasuke_face',
			img: 'images/sasuke_face.jpg'
		}
	];
	cardArray.sort(() => 0.5 - Math.random());
	const grid = document.getElementsByClassName('grid')[0];
	const createBoard = () => {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/konoha.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// states 
	let cardsFlipped = [];
	let cardsFlippedId = [];
	let cardsWon = [];
	const score = document.getElementById("result");
	const trial = document.getElementById("trial");
	let attempts = 0;

	// flip card
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsFlipped.push(cardArray[cardId]);
		cardsFlippedId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsFlipped.length === 2) {
			setTimeout(checkForMatch, 100); 
		}
	}
	

	const checkForMatch = () => {
		let cards = document.getElementsByTagName('img');
		let card1 = cardsFlippedId[0];
		let card2 = cardsFlippedId[1];
		if (cardArray[card1].name === cardArray[card2].name) {
			alert("You Found a Match!");
			cardsWon.push(card1);
			cardsWon.push(card2);
			cards[card1].setAttribute('src', 'images/white.jpg');
			cards[card2].setAttribute('src', 'images/white.jpg');
			cards[card1].removeEventListener("click", flipCard); 
      cards[card2].removeEventListener("click", flipCard);
		} else {
			alert("Try Again!");
			cards[card1].setAttribute('src', 'images/konoha.jpg');
			cards[card2].setAttribute('src', 'images/konoha.jpg');
			attempts++;
			trial.textContent = attempts;
		}
		cardsFlipped = [];
		cardsFlippedId = [];
		score.textContent = cardsWon.length/2;
		if (score.textContent === cardArray.length / 2) {
			score.textContent = 'Congrats';
		}
	}
	createBoard();
});
