// Definizione della classe Utente
class Utente {
    // Proprietà della classe Utente
    nome;
    cognome;
    tesseraNumero;

    // Costruttore per la classe Utente
    constructor(nome, cognome, tesseraNumero) {
        this.nome = nome;
        this.cognome = cognome;
        this.tesseraNumero = tesseraNumero;
    }
    // Funzione di presentazione per Utente
    presentazione() {
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome} e ho la tessera numero ${this.tesseraNumero}`);
    }
}

// Creazione di un'istanza della classe Utente
let utente1 = new Utente("Amine", "Salhi", "23");

// Chiamata al metodo di presentazione per Utente
utente1.presentazione();

// Definizione della classe Persona
class Persona {
    // Proprietà della classe Persona
    nome;
    cognome;
    isAlive = true; // Attributo per lo stato di vita

    // Costruttore per la classe Persona
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    // Funzione di presentazione per Persona
    presentazione() {
        console.log(`Ciao! Mi chiamo ${this.nome} ${this.cognome}`);
        if (this.isAlive) {
            console.log("Sono vivo!!!");
        } else {
            console.log("Sono morto!!");
        }
    }
}

// Creazione di un'istanza della classe Persona
const personaObj = new Persona("Amine", "Salhi");
personaObj.presentazione();

// Definizione della classe Studente che estende Persona
class Studente extends Persona {
    // Attributi della classe Studente
    corso;
    matricola;

    // Costruttore per la classe Studente
    constructor(nome, cognome, corso, matricola) {
        super(nome, cognome); // Richiama il costruttore della classe base Persona
        this.corso = corso;
        this.matricola = matricola;
    }

    presentazione(){
        super.presentazione();
        console.log("Frequento il corso di " + this.corso)
    }
    // Funzione per sostenere un esame
    sostenereEsame(materia) {
        console.log(`Oggi devo fare l'esame di ${materia}`);
    }

    // Funzione che verifica lo stato di vita utilizzando isAlive dalla classe base
    sonoVivo() {
        console.log(`Mio padre è vivo: ${this.isAlive}`);
    }
}

// Creazione di un'istanza della classe Studente
const studenteObj = new Studente("Luigi", "Verdi", "Informatica", 12345);

// Definizione della classe Professore che estende Persona
class Professore extends Persona {
    // Attributi della classe Professore
    materiaInsegnata;

    // Costruttore per la classe Professore
    constructor(nome, cognome, materiaInsegnata) {
        super(nome, cognome); // Richiama il costruttore della classe base Persona
        this.materiaInsegnata = materiaInsegnata;
    }
   presentazione() {
    console.log("Buongiorno mi chiamo " + this.nome + " " + this.cognome);
    console.log("Insegno " + this.materia);
   }
   
    // Funzione per assegnare voti (metodo specifico di Professore)
    assegnareVoti() {
        console.log(`Ho corretto la verifica di ${this.materiaInsegnata}`);
    }
}

// Creazione di un'istanza della classe Professore
const professoreObj = new Professore("De Magistris", "De Magistris", "Matematica");

// Chiamate ai metodi di presentazione, esame e stato di vita per Studente
studenteObj.presentazione();
studenteObj.sostenereEsame("Matematica");
studenteObj.sonoVivo();

// Chiamata al metodo di presentazione per Professore
professoreObj.presentazione();
professoreObj.assegnareVoti();
