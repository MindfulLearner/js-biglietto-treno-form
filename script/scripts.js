// SCRIPTS SWAGGER java script

let passeggero = { 
	percorsoKm: "",
	eta: ""
};


// ora stiamo attraverso promp chiedendo a utente di darci dei dati che verranno inseriti in log per debuggare 

console.log("----------------------------------------------------")
console.log("----------------INSERIMENTO DI KM DA PERCORRERE-------------")
console.log("----------------------------------------------------")
passeggero.percorsoKm = prompt("Inserisci km che vuoi percorre");
passeggero.percorsoKm = parseFloat(passeggero.percorsoKm);
console.log("inserito:" + passeggero.percorsoKm + "km");
console.log("cio che hai inserito e' e un:" + typeof(passeggero.percorsoKm));

console.log("----------------------------------------------------")
console.log("----------------INSERIMENTO DI ETA SWAG-------------")
console.log("----------------------------------------------------")
passeggero.eta = prompt("Inserisci eta che vuoi percorre");
passeggero.eta = parseFloat(passeggero.percorsoKm);
console.log("inserito:" + passeggero.eta + "eta");
console.log("cio che hai inserito e' e un:" + typeof(passeggero.eta));


//Ora siamo calcoliamo il prezzo totale del biglietto di viaggio seguendo le rogole
// - il prezzo base per km e di 0.21
// - applicato 20% su chi e minorenne
// - applicato 40% per gli over 65
// - se e intorno quell'eta tra 65 e  18 allora avranno il prezzo normale 
console.log("----------------------------------------------------")
console.log("----------------ORA CALCOLIAMO 0.21 PER km-------------")
console.log("----------------------------------------------------")

const prezzoBaseTreno = 0.21;

console.log








