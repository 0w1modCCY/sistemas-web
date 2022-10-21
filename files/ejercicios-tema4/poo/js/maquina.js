import {Jugador} from "./jugador.js";

class Maquina extends Jugador {
    constructor(nombre, fuerza, salud) {
        super(name, fuerza, salud);
        this.fuerza = Math.random() * 100
        this.salud = 130
    }

}

export {Maquina}
