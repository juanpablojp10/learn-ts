export abstract class Construccion {

    public static cantidad_edificios: number = 0;
    

    constructor(private _pisos:number){ 
        Construccion.cantidad_edificios +=1;
           
    }

    public impuestos(): number{
        return this.pisos*3000000;
    }

    public get pisos(): number{
        return this._pisos;
        
    }

    public set pisos(pisos: number){
        this._pisos = pisos;


    }

    static edificios_contador(): number {
        return Construccion.cantidad_edificios;
        
     }


        



};

