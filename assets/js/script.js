/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
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



})

function generategrid(difficoltà, cell_number) {

    let cell = '5'
    console.log(cell);
    
    const gameAreaElement = document.querySelector('main .cells')
    gameAreaElement.append(cell)
    gameAreaElement.classList
    
    return cell
    }

console.log(cell);
generategrid(opzione)

/* 
switch (difficoltà) {
        case 'easy':
            numero_celle = 100;
            numero_colonne = 10;
            break;
        case 'easy':
            numero_celle = 81;
            numero_colonne = 9;
            break;
        case 'easy':
            numero_celle = 49;
            numero_colonne = 7;
            break;
    }
    
*/