class Auto {

    // Atributos de la clase o propiedades
    color: string = 'negro'; //también se puede inicializar de forma directa, la buena practica es en el constructor
    puertas: number;
    marca?: string; // cuando no quiero inicializar por defecto se pone el ?
//primer método que se ejecuta al inicial una clase
    constructor(marca?: string){
        this.puertas = 4; // Con this accedo a todas las propiedades y métodos de la clase 
        this.marca = marca;
    }

    //Métodos de la clase 
    acelerar(){
        console.log('Acelerar');

    }

    frenar(){
        console.log('Frenando');

    }

    prender(){
        console.log('Prendiendo');

    }
}


let Ferrari: Auto = new Auto(); //instancia de la clase auto- objeto
console.log(Ferrari);
console.log(Ferrari.marca);
Ferrari.marca ='Ferrari';
console.log(Ferrari.marca);
console.log(Ferrari);
Ferrari.color = 'blanco';
console.log(Ferrari);


let lambo = new Auto('Lamborghini');
console.log(lambo);
lambo.puertas =2;
lambo.color = 'verde';
console.log(lambo);

class Auto2 {

    color: string = 'negro'; // por defecto es publico
    public puertas: number; //Forma explicita para colocar una propiedad publica
    // En el constructor yo puedo crear propiedades de la clase
    //si y solo si tienen el modificador de acceso (public, private, protected)

    //los parámetros que son opcionales, siempre debe ir al final de cualquier método o función
    //en este caso el constructor es un método
    constructor(public peso: number, public marca?: string) {
        this.puertas = 4;
        this.encender();
    }

    apagar() {
        console.log('apagando');
    }

    private encender(){
        console.log(`Bienvenido ${this.marca}, tu color es: ${this.color}, tu peso es: ${this.peso}, y tienes ${this.puertas} puertas.`);
    }



}



let ford = new Auto2(500,'ford');
console.log(ford);
ford.apagar();







