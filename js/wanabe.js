
// esercizio dato da Fabio
// chiedere all'utente
// nome,
// cognome e
// colore preferito
// e stampare nell'h1 in pagina una stringa cosi' composta:
// nomecognomecolorepreferito21


// prendo i dati da quelli forniti dall'utente

var name = prompt('nome utente');
var lastName = prompt('cognome utente');
var favoriteColor = prompt('colore preferito');
var sumName = name + lastName + favoriteColor + 21;
console.log(name, lastName, favoriteColor,);
document.getElementById('title').innerHTML = sumName;


























// _____________________________________________________________________________________________

// Assumendo che si va in pensione a 65 anni,
// chiedi all'utente il suo anno di nascita
// e scrivi quanti anni gli rimangono fino alla pensione

// var offWork = 65;
// var yearNow = 2021;
//
// var birthYars = prompt('quando sei nato');
//
// var ageCurrent = yearNow - birthYars;
// var remainingWork = offWork - ageCurrent;
//
// var offWorkNumber = parseInt(offWork);
// var birthYarsNumber = parseInt(birthYars);
//
// var finischedYear = offWorkNumber + birthYarsNumber;
//
// console.log(offWork, yearNow, birthYars, ageCurrent, remainingWork, finischedYear);
// document.getElementById('title').innerHTML = remainingWork;
// ___________________________________________________________________________________________________

// calcolare l'area di un cerchio

// var radius = prompt('chiedi il raggio');
//  var area = ((2 * radius)*3.14);
//  console.log(radius, area);
//  document.getElementById('title').innerHTML = area;
// _________________________________________________________________________________

// chiedi all'utente in  quale piano abita,
// e assumendo che per ogni piano deve fare 8 gradini,
// scrivi quanti gradini deve fare al giorno e quindi a settimana
// var plan = prompt('chiedi a che piano abita');
// var steps = 8;
// var days = 7;
// var variusStep = plan * steps;
// var totalDaysStep = variusStep * days;
// console.log(plan, steps, days, variusStep, totalDaysStep)
