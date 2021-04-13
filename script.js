$(document).ready(function(){
    //Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
    var studente = {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: '20 anni',
    }
    console.log(studente);
    //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    for(var key in studente){
        console.log(studente[key]);
    }
})