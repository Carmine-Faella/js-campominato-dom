//Definimo le variabili

const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

let counter = document.getElementById('counter');

let up = 1;

let freeCell = [];

gridDom.innerHTML = '';

let finish = false
      
for(let i = 1 ; i <= 100; i++){

    const current = createSquare(i);

    const createBomb = generateBomb(16);

    current.classList.add('d-none');
    
    current.addEventListener('click',
        function(){

            if(createBomb.includes(i)){
                this.classList.add('selected-bomb');
                allBomb(createBomb);
                counter.innerHTML = 'Il tuo punteggio è: ' + freeCell.length + ' Hai perso';
            }else{
                this.classList.add('selected');
                    if(!freeCell.includes(i)){
                        freeCell.push(i);
                        counter.innerHTML = 'Il tuo punteggio è: ' + freeCell.length
                }   
            }

            

        }   
    )

    play.addEventListener('click',

        function(){
            current.classList.remove('selected', 'selected-bomb')
            title.classList.add('d-none');
            current.classList.remove('d-none');
            counter.innerHTML = 'Il tuo punteggio è: 0' 
            freeCell.length = '0';
        }
    )
    
    gridDom.append(current)

}    


//Creiamo la funzione della creazione della griglia


function createSquare(i) {
    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');

    elementSelected.innerHTML = `<div>${i}</div>`
    
    return elementSelected;
}

function generateBomb(numberBomb){

    const bomb = [];

    for(let i = 1; i<= numberBomb; i++){
        
        bomb.push(generateUniqueNumb(bomb, 1, 100));

    }

    return bomb;

}

function generateRandomNumb(min, max){

    const numberRandom = Math.floor(Math.random()*(max - min + 1))+min;

    return numberRandom;
    
}

function generateUniqueNumb(blacklist, min, max){

    let isValid = false;

    let number;

    while(!isValid){

        number = generateRandomNumb(min,max);

        if(!blacklist.includes(number)){
            isValid = true;
        }
    }

    return number;
}

function allBomb(createBomb){

    const square = document.getElementsByClassName('square');

    for(let i = 0; i<square.length; i++){

        if(createBomb.includes(i + 1)){
            square[i].classList.add('selected-bomb')
        }
    }
}











