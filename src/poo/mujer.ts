import { IPersona } from "./IPersona";

export class Mujer implements IPersona {
    
    public edad!: number;

    constructor(public nombre: string, public apellido: string) { }


    public nombre_completo(): string {
        return `${this.nombre}${this.apellido}`
    }

    public ir_cine(película: string, sala: number): void {
        console.log(`Viendo ${película} en ${sala}`)

    }

};



