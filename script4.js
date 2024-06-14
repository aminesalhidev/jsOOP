class Animale {
    nome;
    tipo;
    cibo;

    // Creiamo un costruttore
    constructor(nome, tipo, cibo) {
        this.nome = nome;
        this.tipo = tipo;
        this.cibo = cibo;
    }

    presentazione() {
        console.log("Lui fa di nome " + this.nome + " " + this.tipo + ", che tipo di cibo mangia? " + this.cibo);
    }
}

class Leone extends Animale {
    predepreferita;
    anni;

    // Creeremo un costruttore
    constructor(nome, tipo, cibo, anni, predepreferita) {
        super(nome, tipo, cibo);
        this.anni = anni;
        this.predepreferita = predepreferita;
    }

    presentazione() {
        const stato = this.controllovita();
        console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}, Cibo: ${this.cibo}, Anni: ${this.anni}, Prede Preferite: ${this.predepreferita}, Stato: ${stato}`);
    }

    controllovita() {
        if (this.anni > 20) {
            return this.nome + " è morto";
        } else {
            return "è ancora vivo";
        }
    }
}

// Crea una istanza di Leone
const leone = new Leone("Babo", "Leone", "carnivoro", 23, "gazzella");
leone.presentazione();
