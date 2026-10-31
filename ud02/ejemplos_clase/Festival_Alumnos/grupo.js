export class Grupo{
#nombre;
#genero;
#minutos;

constructor(nombre, genero, minutos){
    this.#nombre = nombre;
    this.#genero = genero;
    this.#minutos = minutos;
}
nombre(){
    return this.#nombre;
}
minutos(){
    return this.#minutos;
}
esLargo(){
    return this.#minutos > 60;
}
ficha(){
    return `${this.#nombre} - ${this.#genero} - ${this.#minutos}`;
}
}