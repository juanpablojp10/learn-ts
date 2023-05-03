const teacher = {
    name: 'juan',
    lastName: 'jimenez'
};

console.log('teacher:', teacher);

// primitivos
//booleans
//declaracion implicita

const isTeacher = true; //to el valor con el cual fue declarado 
let isPlayer = true; // tomo el tipo de el valor que le fue asignado
isPlayer = false; 

// declaración explicita
const hasErrors:boolean = false;
let isChampion: Boolean = false;

let result = hasErrors ? 'tiene errores' : 'no tiene errores'

//string
const firsName = 'juan';
const lastName = "jimenez";

let fullName = 'su nombre es: $ (firsName) $(lastName), bienvenido';
console.log(fullName.toUpperCase());

//number
 
let countStudents: number = 29.5;
let everage: number = 4.5;

console.log(everage.toFixed())


//array
let fruits = ['pera','banano'];
let sports: string[] = ['futbol','baloncesto'];

type stringOrNull = string | null;

//union types
let students: Array<string | null> = ['nico','yhoan', null];
console.log(students.filter((student)  => student !== null));

//tuplas
let exampleTuple : [null,string ] = [null,'pedro']