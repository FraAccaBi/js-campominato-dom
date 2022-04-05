/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */



let bottonePlay = document.getElementById('form')
console.log(bottonePlay);

bottonePlay.addEventListener('submit', function(event) {
    event.preventDefault()
    let opzione = document.getElementById('level').value
    console.log(opzione);
})