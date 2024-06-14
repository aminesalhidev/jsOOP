class Dipendente {
    // Proprietà della classe.
    nome;
    cognome;
    tariffaOraria;

    // Costruttore della classe Dipendente
    constructor(nome, cognome, tariffaOraria) {
        this.nome = nome;
        this.cognome = cognome;
        this.tariffaOraria = tariffaOraria;
    }

    // Metodo di presentazione
    presentazione() {
        console.log(`Ciao! Sono ${this.nome} ${this.cognome}.`);
    }

    calcolaStipendioMensile() {
        return this.tariffaOraria * 8 * 20; // 8 ore al giorno, 20 giorni lavorativi al mese
    }

    calcolaStipendioAnnuale() {
        return this.calcolaStipendioMensile() * 12; // 12 mesi
    }
}

// Definizione della classe Dirigente che estende Dipendente
class Dirigente extends Dipendente {
    sezione;
    bonusAnnuale;

    // Costruttore della classe Dirigente
    constructor(nome, cognome, tariffaOraria, sezione, bonusAnnuale) {
        super(nome, cognome, tariffaOraria); // Richiama il costruttore della classe base Dipendente
        this.sezione = sezione;
        this.bonusAnnuale = bonusAnnuale;
    }

    presentazione() {
        console.log(`Sono ${this.nome} ${this.cognome}, dirigente della sezione ${this.sezione}.`);
    }

    calcolaStipendioAnnuale() {
        return super.calcolaStipendioAnnuale() + this.bonusAnnuale;
    }

    // Metodo per assumere
    assumere() {
        console.log("Bisogna fatturare di più");
    }

    // Metodo per licenziare
    licenziare() {
        console.log("Bisogna tagliare le spese");
    }
}

// Definizione della classe Impiegato che estende Dipendente
class Impiegato extends Dipendente {
    capo;

    // Costruttore della classe Impiegato
    constructor(nome, cognome, tariffaOraria, capo) {
        super(nome, cognome, tariffaOraria); // Richiama il costruttore della classe base Dipendente
        this.capo = capo;
    }

    // Metodo per lamentarsi del capo
    lamentarsiDelCapo() {
        console.log(`${this.capo} è uno stronzo!`);
    }
}

// Definizione della classe Stagista che estende Impiegato
class Stagista extends Impiegato {
    forfait;

    // Costruttore della classe Stagista
    constructor(nome, cognome, capo, forfait) {
        super(nome, cognome, 0, capo); // Passa tariffaOraria come 0
        this.forfait = forfait;
    }

    // Metodo per calcolare lo stipendio annuale
    calcolaStipendioAnnuale() {
        return this.forfait; // Forfait annuale per lo stagista
    }
}

// Creazione di istanze
let dipendente1 = new Dipendente("Giovanni", "Verdi", 20);
let impiegato1 = new Impiegato("Marco", "Bianchi", 18, "Giovanni Verdi");
let dirigente1 = new Dirigente("Elena", "Rossi", 30, "Marketing", 5000);
let stagista1 = new Stagista("Luca", "Bianchi", "Mario Rossi", 10000);

// Creazione di un array di dipendenti
let dipendenti = [dipendente1, impiegato1, dirigente1, stagista1];

// Ciclo for per iterare attraverso tutte le istanze e chiamare i metodi
for (let dipendente of dipendenti) {
    dipendente.presentazione();
    console.log(`Lo stipendio annuale è: ${dipendente.calcolaStipendioAnnuale()} €`);
}
