const gridDom = document.getElementById('grid');

const play = document.getElementById('playTime');

const title = document.getElementById('title');

let counter = document.getElementById('counter');

const playTime = document.getElementById('level');

let up = 1;

let freeCell = [];

gridDom.innerHTML = '';

let finish = false;

playTime.addEventListener('change', function(){

    gridDom.innerHTML ='';

    counter.innerHTML ='';

    if(this.value == 'easy'){for(let i = 1 ; i <= 100; i++){
        const current = createSquare(i);

        const createBomb = generateBomb(16,1,100);

        current.classList.add('d-none');
        
        current.addEventListener('click',
            function(){
                Boom(createBomb, current, i, this.classList)
            }   
        )

        play.addEventListener('click',

            function(){
                reset(current, title, counter, freeCell)
            }
        )
        
        gridDom.append(current)

    }
    }
    if(this.value == 'medium'){for(let i = 1 ; i <= 81; i++){
        const current = createSquare(i);

        const createBomb = generateBomb(16,1,81);

        current.classList.add('d-none');
        
        current.addEventListener('click',
            function(){
                Boom(createBomb, current, i, this.classList)
            }   
        )

        play.addEventListener('click',

            function(){
                reset(current, title, counter, freeCell)
                current.classList.add('square-middle');
                current.classList.remove('square');
            }
        )
    
    gridDom.append(current)

    }
    }
    if(this.value == 'hard'){for(let i = 1 ; i <= 49; i++){
        const current = createSquare(i);

        const createBomb = generateBomb(16,1,49);

        current.classList.add('d-none');
        
        current.addEventListener('click',
            function(){
                Boom(createBomb, current, i, this.classList)
            }   
        )

        play.addEventListener('click',

            function(){
                reset(current, title, counter, freeCell)
                current.classList.add('square-hard');
                current.classList.remove('square');
            }
        )
        
        gridDom.append(current)

    }
    }

})
      

//Creiamo la funzione della creazione della griglia
function reset(current, title, counter, freeCell){
    current.classList.remove('selected', 'selected-bomb')
                title.classList.add('d-none');
                current.classList.remove('d-none');
                counter.innerHTML = 'Il tuo punteggio è: 0' 
                freeCell.length = '0';
};

function Boom(createBomb, current, i, classList){

    if(createBomb.includes(i)){
        current.classList.add('selected-bomb');
        allBomb(createBomb);
        counter.innerHTML = 'Il tuo punteggio è: ' + freeCell.length + ' Hai perso';
    }else{
        classList.add('selected');
            if(!freeCell.includes(i)){
                freeCell.push(i);
                counter.innerHTML = 'Il tuo punteggio è: ' + freeCell.length
        }   
    }

};

function createSquare(i) {
    const elementSelected = document.createElement('div');
    elementSelected.classList.add('square');

    elementSelected.innerHTML = `<div>${i}</div>`
    
    return elementSelected;
}

function generateBomb(numberBomb, min, max){

    const bomb = [];

    for(let i = 1; i<= numberBomb; i++){
        
        bomb.push(generateUniqueNumb(bomb, min, max));

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

    const squareMiddle = document.getElementsByClassName('square-middle');

    for(let i = 0; i<squareMiddle.length; i++){

        if(createBomb.includes(i + 1)){
            squareMiddle[i].classList.add('selected-bomb')
        }
    }

    const squareHard = document.getElementsByClassName('square-hard');

    for(let i = 0; i<squareHard.length; i++){

        if(createBomb.includes(i + 1)){
            squareHard[i].classList.add('selected-bomb')
        }
    }
}
