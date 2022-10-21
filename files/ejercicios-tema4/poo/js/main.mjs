import {Humano} from "./humano.js";
import {Maquina} from "./maquina.js";
import {Extraterrestre} from "./extraterrestre.js";

const humanos = [];
const maquinas = [];
const extraterrestres = [];

for (let i = 0; i < 10; i++) {
    humanos.push(new Humano("h" + (i+1), 70, 150))
    maquinas.push(new Maquina("m" + (i+1), Math.random() * 100, 130))
    extraterrestres.push(new Extraterrestre("e" + (i+1), Math.random() * 85, 150))
}

const campo = humanos.concat(maquinas, extraterrestres);
mezclar_array(campo);

while(campo.length > 1){
    for(let i = 0; i < campo.length; i+=2){
        if(campo[i].luchar(campo[i+1])){
            campo.splice(i+1, 1);
        }else{
            campo.splice(i, 1);
        }
    }

    mezclar_array(campo);
}

console.log("El ganador es: " + campo[0].nombre);

function mezclar_array(array){
    array.sort(()=> Math.random() - 0.5);
}



