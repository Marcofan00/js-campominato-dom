// L’utente indica un livello di difficoltà 
    //Creo dei prompt per far scegliere la difficoltà
    //Creo un if statement per generare la griglia in base alla risposta dell'utente
// con difficoltà 1 => tra 1 e 100 -> 10 quadrati x riga
// con difficoltà 2 => tra 1 e 81 -> 9 quadrati x riga
// con difficoltà 3 => tra 1 e 49 -> 7 quadrati x riga
    //Creo una funzione per generare le celle => ciclo for
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
    //all'interno del ciclo for aggiungo un addEventListner click sui div quadrato
        //al click il quadrato selezionato cambia colore

// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// (come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
// La partita termina quando il giocatore clicca su una bomba
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi se ci pensate dovrete tenere traccia del punteggio).


function showAllBombs () {

    const squares = document.querySelectorAll('.square');
  
    for (let i = 0; i < squares.length; i++) {
        for (let y = 0; y < bombs.length; y++) {
            if (i === bombs[y]) {
                squares[i].classList.add("bomb"); 
            }
        }
    }
}

var gridContainer = document.getElementById("grid-container");

var difficulty = parseInt(prompt("Scegli il livello di difficoltà: 1, 2 o 3"));
let gameOver = false;
let bombs = [];

function createBombs (row, square) {
while (bombs.length < 16) {
    let num = Math.floor(Math.random() * (row * square));
    let found = false;

    for(let i = 0; i < num; i++) {
        if(num === bombs[i]){
            found = true;
        }
    }
    if(found === false) {
        bombs.push(num);
    }
}
}

function gridGenerator(row, square) {
let counter = 1;
//genero un array di 16 numeri univoci casuali
    //il range di numeri generati dipende dal livello di difficoltà scelto 
createBombs(row, square);

console.log(bombs)
for(let i = 0; i < row; i++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    gridContainer.appendChild(rowElement);

    for (let j = 0; j < square; j++) {
        let squareElement = document.createElement("div");
        squareElement.className = "square";
        rowElement.append(squareElement);
        let hasBomb = false;
        //ciclo dell'array/bombe

        for(let x = 0; x < counter; x++) {
            if(bombs[x] == counter){
                console.log("trovato")
                hasBomb = true;
            }
        } 

        
        squareElement.addEventListener("click",
            function(){
                  
                //condizioni : se il numero della casella cliccata è presente nell'array bombe :
                //la partita termina
                     //faccio vedere tutte le bombe
                     //faccio vedere il punteggio -> numero di click
                     //disabilito il click

                     if (gameOver) return;

                     if (hasBomb) {
                        squareElement.classList.add("bomb"); 
                        gameOver = true;
                        showAllBombs();    
                     } else {
                        squareElement.classList.add("selected");  
                     }     
            }
        )

         if(gameOver) {
             console.log('aaa 1');
         }
        squareElement.append(counter);
        counter++; 
    }   
}
}

if (difficulty === 1) {
gridGenerator(10, 10);
}else if (difficulty === 2) {
gridGenerator(9, 9);
} else if (difficulty === 3) {
gridGenerator(7, 7)
}