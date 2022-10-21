export {Jugador}

class Jugador {
    constructor(nombre, fuerza, salud) {
        this.name = name;
        this.fuerza = fuerza;
        this.salud = salud;
    }

    luchar(jugador) {
        if( Math.random() * this.fuerza > jugador.fuerza){
            jugador.salud -= this.fuerza;
            console.log(this.nombre + " ha ganado la pelea contra " + jugador.nombre)
            return true;
        }else{
            this.salud -= jugador.fuerza;
            console.log(jugador.nombre + " ha ganado la pelea contra " + this.nombre)
            return false;
        }
    }

    get nombre() {
        return this.name;
    }
}
