import {Jugador} from "./jugador.js";

class Humano extends Jugador {
    constructor(nombre, fuerza, salud) {
        super(name, fuerza, salud);
        this.fuerza = 70
        this.salud = 150
    }

}

export {Humano}
