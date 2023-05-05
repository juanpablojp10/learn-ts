// todo en una interface es publico 
// Interface : me sirve para generar la estructura de un objeto o definir un contrato para una clase.
//definir un contrato para una clase

interface IContrato {
    //propiedades opcionales, no es obligatorio que quien implemente escriba estas propiedades
    salario?: number;
    fechaInicio?: Date;
    //propiedades obligatorias deben escribirse en la implementación
    rol: Rol;

    // solo se crea la firma de los métodos, quien implemente debe definir
    // su funcionalidad
    // métodos opcionales
    cancelar?(): void;

    pagar(): number;
    suspender(cantidad: number): void;


}

enum Rol { // con enum hacemos un diccionario
    Junior,
    Middle,
    Senior
}

enum tipoContrato { // con enum hacemos un diccionario
    Indefinido,
    TerminoFijo,
    prestaciónServicios
}

class ContratoUltraCredit implements IContrato {
    // Atributos que debo tener de la interface ContratoJunior

    public salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    // Atributos propios
    tipoContrato: tipoContrato;

    constructor() {

        this.tipoContrato = tipoContrato.Indefinido
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }

    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} Dias`);
        console.log('Información del contrato')
        // ?? esto es lo mismo que un if ternario, ?? valida que la expresión de la izquierda sea diferente 
        // de null o undefined, si es null o undefined, devolverá la expresión de la derecha,
        // de lo contrario retorna el valor de la expresión de la izquierda
        console.log(` Tu salario es ${this.salario ?? 1000}`);
        // validando null, undefined, 0, false, '', NaN
        console.log(` Tu salario es ${this.salario ? this.salario : 1000}`);
    }

}


