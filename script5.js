class Vehicle {
    // Creazione delle proprietà
type;
model;
capacity;
speedKmforHour;
priceKMforhour;
consumptionLforKm;
services = [];

//creazione degli costruttori
    constructor(type, model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage) {
        this.type = type;
        this.model = model;
        this.capacity = capacity;
        this.speedKmForHour = speedKmForHour;
        this.priceKmForHour = priceKmForHour;
        this.consumptionLForKm = consumptionLForKm;
        this.agencyPercentage = agencyPercentage;
        this.reservations = [];
    }

    calcPassengerPrice(distance) {

        // Calcola il costo del viaggio per Passeggeri
        const baseCost = this.priceKmForHour * distance;
        const totalCost = baseCost + (baseCost * this.agencyPercentage / 100);
        return totalCost;
    }

    calcCompanyPrice(distance) {

        // Calcola il costo del viaggio per l'azienda, includendo il consumo di carburante.     
        const baseCost = this.priceKmForHour * distance;
        const fuelCost = this.consumptionLForKm * distance * this.fuelPrice;
        return baseCost + fuelCost;
    }

    calcEstimatedTime(distance) {
        // Calcola la durata stimata del viaggio.
        return distance / this.speedKmForHour;
    }

    addReservation(reservation) {
        this.reservations.push(reservation);
    }

    removeReservation(reservationId) {
        this.reservations = this.reservations.filter(r => r.id !== reservationId);
    }

    printInfo() {
        console.log(`Tipo: ${this.type}`);
        console.log(`Modello: ${this.model}`);
        console.log(`Numrto massimo di passeggeri: ${this.capacity}`);
        console.log(`Velocità: ${this.speedKmForHour} km/h`);
        console.log(`Prezzo per km: ${this.priceKmForHour} €`);
        console.log(`Consumo per km: ${this.consumptionLForKm} L/km`);
        console.log(`Percentuale Agenzia: ${this.agencyPercentage}%`);
        console.log(`attualmente riservati sonno : ${JSON.stringify(this.reservations)}`);
    }
}

class Aereo extends Vehicle {
    constructor(model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage) {
        super('Aereo', model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage);
    }
}

class Treno extends Vehicle {
    constructor(model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage) {
        super('Treno', model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage);
    }
}

class Autobus extends Vehicle {
    constructor(model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage) {
        super('Autobus', model, capacity, speedKmForHour, priceKmForHour, consumptionLForKm, agencyPercentage);
    }
}

// Esempio di utilizzo
const aereo = new Aereo("Boeing 747", 416, 900, 0.1, 4, 10);
const treno = new Treno("Frecciarossa", 600, 300, 0.05, 2, 5);
const autobus = new Autobus("Setra S 531 DT", 78, 100, 0.03, 20, 8);

// Aggiunta di prenotazioni
aereo.addReservation({ id: 1, nome: "Mario Rossi", passeggeri: 3, distanza: 1500 });
treno.addReservation({ id: 2, nome: "Luigi Bianchi", passeggeri: 4, distanza: 200 });
autobus.addReservation({ id: 3, nome: "Carla Verdi", passeggeri: 20, distanza: 300 });

// Visualizzazione delle informazioni
aereo.printInfo();
treno.printInfo();
autobus.printInfo();

// Calcolo dei costi e delle durate
console.log("Costo viaggio aereo per passeggeri:", aereo.calcPassengerPrice(1500));
console.log("Costo viaggio treno per passeggeri:", treno.calcPassengerPrice(200));
console.log("Costo viaggio autobus per passeggeri:", autobus.calcPassengerPrice(300));

console.log("Durata viaggio aereo:", aereo.calcEstimatedTime(1500), "ore");
console.log("Durata viaggio treno:", treno.calcEstimatedTime(200), "ore");
console.log("Durata viaggio autobus:", autobus.calcEstimatedTime(300), "ore");

// Rimozione di prenotazioni
aereo.removeReservation(1);
aereo.printInfo();
