const game = document.querySelector('.game');
const gameArea = document.querySelector('.gameArea');
const btnLaunch = document.querySelector('#launch');

const btnFight = document.querySelector('#fight');
const result = document.querySelector('.result');

//result display
const feedbackDisplay = document.querySelector('#feedback');
const winnerDisplay = document.querySelector('#winner');

//hero display
const heroImage = document.querySelector('#hero');
const heroNameDisplay = document.querySelector('#heroName');
const heroWeaponDisplay = document.querySelector('#heroWeapon');


//villain display
const villainImage = document.querySelector('#villain');
const villainNameDisplay = document.querySelector('#villainName');
const villainWeaponDisplay = document.querySelector('#villainWeapon');


btnLaunch.addEventListener('click', () => {
    game.style.display = 'block'; //makes game div visible (brings it back to the document flow)
    btnLaunch.style.display = 'none'; //hides the Launch button (takes it out of the document flow)

    const heroes = ['Mr. Bean', 'Harry Potter', 'Lara Croft', 'Grand Master Yoda'];
    const villains = ['Cruella', 'Joker', 'Darth Vader', 'Vector'];
    const weapon = ['banana', 'flip-flop', 'fork', 'magic-wand', 'sword'];

    const hero =heroes[Math.floor(Math.random() * heroes.length)]; //get a random hero
    const villain =villains[Math.floor(Math.random() * villains.length)]; //get a random villain
    const heroWeapon =weapon[Math.floor(Math.random() * weapon.length)]; //get a random weapon for the hero
    const villainWeapon =weapon[Math.floor(Math.random() * weapon.length)]; //get a random weapon for the villain

    let heroImageLink = '';  //prepares a variable to store the name of an image

    //get the correct name for an image in accordance with the heroe's name
    if(hero === 'Mr. Bean'){
        heroImageLink = 'bean';
    } else if (hero === 'Harry Potter') {
        heroImageLink = 'harry';
    } else if (hero === 'Lara Croft') {
        heroImageLink = 'lara';
    } else if (hero === 'Grand Master Yoda') {
        heroImageLink = 'yoda';
    }

    //display heroe's data
    heroImage.src = `images/heroes/${heroImageLink}.png`;
    heroNameDisplay.innerHTML = hero;
    heroWeaponDisplay.src = `images/weapon/${heroWeapon}.png`;


    let villainImageLink = ''; //prepares a variable to store the name of an image

    //get the correct name for an image in accordance with the villain's name
    if(villain === 'Cruella'){
        villainImageLink = 'cruella';
    } else if (villain === 'Joker') {
        villainImageLink = 'joker';
    } else if (villain === 'Darth Vader') {
        villainImageLink = 'vader';
    } else if (villain === 'Vector') {
        villainImageLink = 'vector';
    }

    //display villain's data
    villainImage.src = `images/villains/${villainImageLink}.png`;
    villainNameDisplay.innerHTML = villain;
    villainWeaponDisplay.src = `images/weapon/${villainWeapon}.png`;

});


//dice roll between the characters
btnFight.addEventListener('click', () => {
    btnFight.style.display = 'none'; //hide the button

    const heroesRoll = Math.floor(Math.random() * 6) + 1; //generates heroe's roll
    const villainsRoll = Math.floor(Math.random() * 6) + 1; //generates villain's roll

    let feedback = `The Hero hit ${heroesRoll}. The Villain hit ${villainsRoll}.`;
    let whoIsTheWinner = '';


    if(heroesRoll > villainsRoll) {
        whoIsTheWinner = 'The Hero saves the day!';
    } else if (heroesRoll < villainsRoll) {
        whoIsTheWinner = 'The Dark Side wins.';
    } else {
        whoIsTheWinner = 'Looks like it\'s a draw.';
    }
   
    feedbackDisplay.innerHTML = feedback;
    winnerDisplay.innerHTML = whoIsTheWinner;

    result.style.display = 'block'; //make the result visible
});