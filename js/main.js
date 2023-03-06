//Definimo le variabili

const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

let counter = document.getElementById('counter');

let numberBlacklist = [];

console.log(numberBlacklist)

title.classList.remove('d-none');

let up = 0

for(let i = 1; i<=16; i++){
    const newValidRandomNumber = generateUniqueRandomNumber(numberBlacklist, 1, 100);
    numberBlacklist.push(newValidRandomNumber);

}
      
for(let i = 1 ; i <= 100; i++){

    const current = createSquare();

    current.innerHTML = `<div class="square-number">${i}</div>`;
    
    current.addEventListener('click',
        function(){
            
            up++;
            counter.innerHTML = 'Il tuo punteggio è: ' + up 
            
        }
)

    play.addEventListener('click',

        function(){
            title.classList.add('d-none');
            current.classList.remove('d-none');
        }
    )
    gridDom.append(current);      

}        



//Creiamo la funzione della creazione della griglia

function createSquare() {
    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');
    elementSelected.classList.add('d-none');

    return elementSelected;
}

function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;

}

function generateRandomNumber(min, max) {

        const number = Math.floor(Math.random() * (max - min +1)) + min;
        return number;
 
}






