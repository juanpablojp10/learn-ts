import { tipoEmpleado } from './tipo_empleado.enum';
import { Empleado } from "./empleado";

export class EmpleadoTiempoCompleto extends Empleado {
    public tipoEmpleado: string;

    constructor (nombre: string, id: number, public salarioMensual: number) {
        super(nombre,id);
        this.tipoEmpleado = tipoEmpleado.TIEMPO_COMPLETO;
    }


    public calcularSalario(): number {
        return this.salarioMensual;
    }

}