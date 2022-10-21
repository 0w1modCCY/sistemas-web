import {Jugador} from "./jugador.js";

class Extraterrestre extends Jugador {
    constructor(nombre, fuerza, salud) {
        super(name, fuerza, salud);
        this.fuerza = Math.random() * 85
        this.salud = 150
    }


    get nombre() {
        return this.reverseString(this.name);
    }

    reverseString(str) {
        return str.split("").reverse().join("");
    }
}

export {Extraterrestre}
