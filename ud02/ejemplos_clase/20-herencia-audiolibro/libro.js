//Cada clase vive en su propio archivo y se exporta.

export class Libro{
    //Campo privado, solo se puede usar dentro de la clase
    #prestado = false;
    //Definimos el constructor
    constructor(titulo,autor,anno){
        this.titulo = titulo;
        this.autor = autor;
        this.anno = anno;
    }

    resumen(){
        return `${this.titulo} - ${this.autor} - ${this.anno}`;
    }
    prestar(){
        this.#prestado = true;
    }
    estaPrestado(){
        return this.#prestado;
    }
    devolver(){
        this.#prestado = false;
    }
}