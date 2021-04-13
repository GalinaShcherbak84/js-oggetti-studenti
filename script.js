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
    //Creare un array di oggetti di studenti.
    var studenti =[
        {
            nome: 'Mario',
            cognome: 'Rossi',
            eta: '20 anni',
        },
        {
            nome: 'Luca',
            cognome: 'Verdi',
            eta: '21 anni',
        },
        {
            nome: 'Marco',
            cognome: 'Neri',
            eta: '19 anni',
        },
        {
            nome: 'Paolo',
            cognome: 'Gialli',
            eta: '22 anni',
        },
    ]
    console.log(studenti);
    //Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    for(var i = 0; i < studenti.length; i++){
        //console.log(studenti[i]);
        console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    }
    /* Dare la possibilità all’utente, attraverso 3 prompt(), 
    di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.  */
    var studenteInserito = {
        nome: prompt('Scrivi il tuo nome.'),
        cognome: prompt('Scrivi il tuo cognome.'),
        eta: prompt('Quanti anni hai?'),
    }
    console.log(studenteInserito);
    //Inserire il nuovo oggetto  nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
    studenti.push(studenteInserito);
    console.log(studenti);
    for(var i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    }
})