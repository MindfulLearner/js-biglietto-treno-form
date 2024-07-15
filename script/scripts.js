document.getElementById('calcolaBtn').addEventListener('click', function() {
	let passeggero = { 
		percorsoKm: "",
		eta: ""
	};

	console.log("----------------------------------------------------")
	console.log("----------------INSERIMENTO DI KM DA PERCORRERE-------------")
	console.log("----------------------------------------------------")
	passeggero.percorsoKm = document.getElementById('percorsoKm').value;
	passeggero.percorsoKm = parseFloat(passeggero.percorsoKm);
	console.log("inserito:" + passeggero.percorsoKm + " km");
	console.log("cio che hai inserito e' e un:" + typeof(passeggero.percorsoKm));

	console.log("----------------------------------------------------")
	console.log("----------------INSERIMENTO DI ETA SWAG-------------")
	console.log("----------------------------------------------------")
	passeggero.eta = document.getElementById('eta').value;
	passeggero.eta = parseFloat(passeggero.eta);
	console.log("inserito:" + passeggero.eta + " eta");
	console.log("cio che hai inserito e' e un:" + typeof(passeggero.eta));

	console.log("----------------------------------------------------")
	console.log("----------------ORA CALCOLIAMO 0.21 PER km-------------")
	console.log("----------------------------------------------------")

	const euroPerKm = 0.21;
	let costoTotalePerKm = passeggero.percorsoKm * euroPerKm;

	console.log(`il costo del percorso normale sara ${passeggero.percorsoKm} x ${euroPerKm}`);
	console.log(`costo per Km: ${costoTotalePerKm.toFixed(2)} $`);

	console.log("----------------------------------------------------")
	console.log("-----CONTROLLO ETA per eventuali scontistiche -------")
	console.log("----------------------------------------------------")

	let prezzoFinale = costoTotalePerKm;
	let ticketTitle = "Biglietto";

	if (passeggero.eta < 18) {
		console.log(`avendo ${passeggero.eta} anni e minorenne`);
		let scontoMinorenni = 0.20;
		let scontoMinorenniDifferenza = costoTotalePerKm * scontoMinorenni;
		let costoTotaleScontoMinorenni = costoTotalePerKm - scontoMinorenniDifferenza;
		console.log(`lo sconto applicato su ${costoTotalePerKm} $ sara' di 20% quindi ${costoTotaleScontoMinorenni.toFixed(2)} $`);
		prezzoFinale = costoTotaleScontoMinorenni;
		ticketTitle = "Biglietto Minorenni (Sconto 20%)";
	} else if (passeggero.eta < 65) {
		console.log(`avendo ${passeggero.eta} anni e un middle aged man`);
		ticketTitle = "Biglietto Standard";
	} else { 
		console.log(`avendo ${passeggero.eta} anni e un vecchietto`);
		let scontoVecchietti = 0.40;
		let scontoVecchiettiDifferenza= costoTotalePerKm * scontoVecchietti;
		let costoTotaleScontoVecchietti = costoTotalePerKm - scontoVecchiettiDifferenza;
		console.log(`lo sconto applicato su ${costoTotalePerKm} $ sara' di 40% quindi ${costoTotaleScontoVecchietti.toFixed(2)} $`);
		prezzoFinale = costoTotaleScontoVecchietti;
		ticketTitle = "Biglietto Over 65 (Sconto 40%)";
	}

	// Visualizzare i risultati sulla pagina e mostrare il biglietto
	document.getElementById('outputTitle').innerText = ticketTitle;
	document.getElementById('outputKm').innerText = `Km da Percorrere: ${passeggero.percorsoKm} km`;
	document.getElementById('outputEta').innerText = `Età: ${passeggero.eta} anni`;
	document.getElementById('outputPrezzo').innerText = `Prezzo Finale: ${prezzoFinale.toFixed(2)} €`;
	document.getElementById('output').style.display = 'block';
});
