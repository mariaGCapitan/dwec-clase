export class Festival {
    #nombre;
    #cartel = []; //Contendrá objetos de Grupos

    constructor(nombre){
        this.#nombre = nombre;
    }
    anadirGrupo(grupoAnnadir){
        const repetido = this.#cartel.some(g => g.nombre() === grupoAnnadir.nombre())
        if (repetido){
            return false;
        }
        this.#cartel.push(grupoAnnadir);
        return true;
    }
    cuantos(){
        return this.#cartel.length;
    }
    cartel(){
        return [...this.#cartel];
    }
    resumen(){
        return `${this.#nombre} - ${this.cuantos()} grupos en el cartel`;
    }
}