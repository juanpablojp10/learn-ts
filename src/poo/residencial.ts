import { IPersona } from "./IPersona"
import { Construccion } from "./construccion";
import { Hombre } from "./hombre";
import { Mujer } from "./mujer";

export class Residencial extends Construccion {
    private _habitantes: Array<IPersona>;
    

    constructor(pisos: number) {
        super(pisos);
        this._habitantes = [];

    }

    public override impuestos(): number { //override es para sobrescribir una clase abstracta
        return this.pisos * 1500000;
    }

    public numero_habitantes(): number{
        return this._habitantes.length;
    }

    public agregar_habitante(persona: IPersona): void{
        this._habitantes.push(persona);

    }

    public listar_habitantes(): void{
        this._habitantes.forEach(( persona )=>{

            console.log(persona.nombre_completo());

            if (persona instanceof Hombre){
                persona.hablar_futbol('inter', 2)
            }
            else if(persona instanceof Mujer){
                persona.ir_cine('avatar', 2)
            }

            
        }
        
        
        )

        }

    }
