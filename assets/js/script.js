/* Consegna
L'utente indica un livello di difficolta in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficolta 1 => tra 1 e 100
con difficolta 2 => tra 1 e 81
con difficolta 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


//inizializzo variabile per il submit del forum
let bottonePlay = document.getElementById('form')
//console.log(bottonePlay);
//associo al bottone l'eventlistener che si attiva all'invio del form 
bottonePlay.addEventListener('submit', function(event) {
    //prevengo l'azione di default (ovvero il refresh della pagina)
    event.preventDefault()
    //prendo il valore della selezione inoltrata con il submit
    let opzione = document.getElementById('level').value
    console.log(opzione);
    generategrid(opzione);
})

function generategrid(difficolta) {
    let endGame = false;
    let punteggio = 0;

    let cell_number = 49;
    if (difficolta == 'easy'){
        cell_number = 100
    } else if  (difficolta == 'medium'){
        cell_number = 81
    }
    const gameAreaElement = document.querySelector('main .cells');
    gameAreaElement.innerHTML = "";
    let bomb_numbers = generateBombNumber(cell_number);
    console.log(bomb_numbers);
    for (let i = 1; i <= cell_number; i++) {
        let cell = document.createElement('div')
        gameAreaElement.append(cell)
        cell.classList.add('cell')
        cell.style.width = `calc(100% / ${Math.sqrt(cell_number)})`
        cell.innerHTML = i
        cell.addEventListener('click', function(){
            if(!endGame){
                console.log(i);
                if(bomb_numbers.includes(i)){
                    const cells = document.querySelectorAll('.cell')
                    
                    for (let x = 0; x < cells.length; x++) {
                        if (bomb_numbers.includes(x+1)){
                            cells[x].classList.add('bomb')
                        }
                    }
                    alert('hai perso '+punteggio)
                    endGame = true;
                } else {
                    this.classList.add('selected')
                    punteggio++;
                }
                if(punteggio+16 == cell_number){
                    alert('hai vinto con punteggio '+punteggio)
                    endGame = true;    
                }
            }else{
                console.log("gioco finito");
            }
        })
        
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function generateBombNumber(num) {
    let bomb_array = []
    while(bomb_array.length < 16){
        let rand = getRndInteger(1,num)
        if (!bomb_array.includes(rand)) {
            bomb_array.push(rand) 
        }
    }
    return bomb_array;
}


