import { Residencial } from './residencial';
import { Mujer } from './mujer';
import { IPersona } from "./IPersona";
import { Hombre } from "./hombre";
import { Comercial } from './comercial';

const hombre1: IPersona = new Hombre( 'Juan','Jimenez');
hombre1.edad = 32;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre(); // recibe vacio
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('juan jose peralez'); // recibe solo el nombre
hombre3.edad = 18;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre('',' peralez'); // recibe solo el apellido
hombre4.edad = 18;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer('Maria', 'Galeano');


const residencial = new Residencial( 6 );
console.log( 'Impuestos de residencial', residencial.impuestos() );
residencial.agregar_habitante( hombre1 );
residencial.agregar_habitante( hombre2 );
residencial.agregar_habitante( hombre3 );
residencial.agregar_habitante( hombre4 );
residencial.agregar_habitante( mujer );
residencial.listar_habitantes();


const comercial = new Comercial( 3, 25 );
console.log( 'Impuestos de comercial 1', comercial.impuestos() );

const comercial2 = new Comercial( 8, 150 );

