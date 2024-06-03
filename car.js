class Vehicle {
constructor(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}

honk() {

    return "Beep.";
}

toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

const myCar = new Vehicle('Toyota', 'Corolla', 2020);

console.log(myCar.honk());
console.log(myCar.toString());

class Car extends Vehicle {
constructor(make,model,year) {
super(make,model, year);
this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
constructor(make,model,year) {
    super(make,model,year);
this.numWheels = 2;
}
revEngine() {
    return 'VROOOM!!!';
    }
}

class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicles.length >= this.capacity) {
            return 'Sorry, we are full sir.';
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle Added!';
    }
}

const luisGarage = new Garage(2);
const bike = new Motorcycle('Yamaha','MT-09',2000);
const car = new Vehicle('Ford','Mustang',2006);

console.log(luisGarage.add(myCar));
console.log(luisGarage.add(bike));
console.log(luisGarage.add(car));
console.log(luisGarage.add('DOG'));