// La classe che ha come corpo protagonista
class Persona {
    // Proprietà della classe
    nome;
    cognome;
    eta;

    
    // Alloco il costruttore alle proprietà
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    presentazione() {
        console.log("Ciao! Mi chiamo " + this.nome + " " + this.cognome + " ed ho " + this.eta + " anni.");
    }
}

// Creazione di una classe di nome Studente
class Studente extends Persona {
    classe;
    mediavoti;

    constructor(nome, cognome, eta, classe, mediavoti) {
        super(nome, cognome, eta);
        this.classe = classe;
        this.mediavoti = mediavoti;
    }

    // Metodologia
    presentazione() {
        console.log(`Sono ${this.nome} ${this.cognome}, ho ${this.eta} anni, frequento la classe ${this.classe} ed ho la votazione di: ${this.mediavoti}`);
    }

    calcolaPromozione() {
        if (this.mediavoti >= 6) {
            console.log("Sei stato promosso");
        } else {
            console.log("Mi dispiace, sei stato bocciato");
        }
    }
}

// Istanza dello studente
let studente = new Studente("Amine", "Salhi", 23, "3d", 4);

// Creazione di una classe di nome Insegnante
class Insegnante extends Persona {
    materia;
    stipendioMensile;

    // Alloco un costruttore
    constructor(nome, cognome, eta, materia, stipendioMensile) {
        super(nome, cognome, eta);
        this.materia = materia;
        this.stipendioMensile = stipendioMensile;
    }

    calcolaStipendioAnnuale() {
        return this.stipendioMensile * 12;
    }

    presentazione() {
        const stipendioAnnuale = this.calcolaStipendioAnnuale();
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome}, insegno ${this.materia} ed il mio stipendio annuale è di ${stipendioAnnuale} €. Il mio stipendio mensile è di ${this.stipendioMensile} €.`);
    }
}

// Istanza dell'insegnante
let insegnante = new Insegnante("Laura", "Bianchi", 40, "Matematica", 1500);

// Creazione di una classe di nome Preside
class Preside extends Persona {
    anniEsperienza;

    // Colloquiamo un costruttore
    constructor(nome, cognome, eta, anniEsperienza) {
        super(nome, cognome, eta);
        this.anniEsperienza = anniEsperienza;
    }

    presentazione() {
        const bonusAnnuale = this.calcoloBonusAnnuale();
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome}, ed ho ${this.eta} anni con un'esperienza di ${this.anniEsperienza} anni. Il mio bonus annuale è di ${bonusAnnuale} €.`);
    }

    calcoloBonusAnnuale() {
        return this.anniEsperienza * 500;
    }
}

// Istanza del Preside
let preside = new Preside("Iara", "Ianiro", 50, 5);

//creazione di for per iterare tutto all'interno di esso
let tutti = [preside,insegnante,studente];
for(let tutte of tutti){
    tutte.presentazione();
     preside.calcoloBonusAnnuale();
}


