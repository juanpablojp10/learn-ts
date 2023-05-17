import { tipoEmpleado } from './tipo_empleado.enum';
import { EmpleadoPorHora } from './empleado_hora';
import { Empleado } from "./empleado";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'juan Pablo Jimenez',
    123,
    1500000
);
empleadoTiempoCompleto.mostrarInformación();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()} ` );
//Cast
console.log(
    'cast', (empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual
);

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto) {
    console.log( empleadoTiempoCompleto.salarioMensual);
}

console.log("=====================================");

const empleadoPorHora = new EmpleadoPorHora (
    'Juanita Perez',
    456,
    tipoEmpleado.POR_HORA,
    200000,
    5
);
empleadoPorHora.mostrarInformación();
console.log(`Salario: ${empleadoPorHora.calcularSalario()} ` );
console.log(empleadoPorHora.tarifaPorHora);
console.log(empleadoPorHora.horasTrabajadas);


const empleados = {empleadoTiempoCompleto, empleadoPorHora};