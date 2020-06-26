

/* 
    ---------------------------------
        VIZUALIZACIÓN DE DATOS
    ---------------------------------
*/

document.write(nombre.toUpperCase() + "<br>");
document.write("<br><br>");

document.write(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI[valor]}" <br> <br>
        Entonces el DNI es: "${valor_dni} }"`);

// Visualización del resultado final en consola
console.log(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI[valor]}" \n \n
        Entonces el DNI es: "${valor_dni}}"`);






/* 
    -----------------
        ARRAY []
    -----------------
*/

var mascotas = ["perro", "gato", "serpiente"];
console.log(mascotas.length); // Nos devuelve el tamaño del array

// acceder a los datos guardados en el ARRAY
mascotas[0]; // accedo a perro
mascotas[1]; // accedo a gato
mascotas[2]; // accedo a serpiente

// insertar "AL FINAL-ultimaposición" un elemento nuevo dentro del array de mascotas
mascotas.push("canario");
mascotas.push("largato");

//pop  - eliminar elementos del final. Es la que se utiliza mas
mascotas.pop();

// unshift  -Inserta elementos  desde el "INICIO"
mascotas.unshift("alcon milenario");

//shift  - elimina elementos desde el principio
mascotas.shift();

//indexOP - me dice en que posicion esta "gato"
mascotas.indexOf("gato");
console.log(mascotas.indexOf('gato'));






/* 
    -------------------------
        METODOS DE ARRAY []
    -------------------------
*/

var articulos = 
    [
        { nombre: "aspiradora", precio: 320 },
        { nombre: "x-box", precio: 520 },
        { nombre: "micro", precio: 150 },
        { nombre: "secadora", precio: 440 },
        { nombre: "pc", precio: 1320 },
    ];

// TODOS TIENEN EL OBJETIVO DE "BUSAR DENTRO DE TODO EL ARRAY"




/* SINTAXIS */
var Imprimir_Precios_menores_400 = articulos.filter(function(articulo)
    {
        return articulo.precio<400;
    })
console.log(Imprimir_Precios_menores_400);





// el filter valora si es verdero o falso. No estropea el array padre original y crea un nuevo array
articulos.filter();

// map saca el nombre de los articulos. No se estropea el original y crea uno nuevo.
articulo.map();

// find - nos encuentra el objeto y nos devuelve el objeto
articulo.find();

// FOREACH - No crea ningun nuevo array y tampoco modifica  el array original
articulo.forEach();

// SOME genera un booleano y no toca el array el original. Nos devuelve un "true" o un "false"
articulo.some();







/* 
    -------------------
        OBJETOS
    -------------------
*/

var persona = 
    {
        nombre: "Juan",
        edad : 33,
        altura : 1.77,
    };

console.log(persona.nombre.toUpperCase());  // Pone todo el string en Mayuscula
persona.edad +=1;               //34 
console.log(persona.edad +=1);  //35

// ...persona        //"spead operator"


/*   ----- Espacio de Memoria - Comparar Objetos -------*/
var prueba01 = 
    {
        nombre :'Pepe',
    };

var prueba02 = 
    {
        nombre :'Pepe',
    };


//false. los objetos no estan comparando el contenido sino es el espacio de Memoria
prueba01==prueba02   //false







/* 
    -------------------------
        BUENAS PRACTICAS
    -------------------------
*/



/* 
    -------------------------
        MAGIC NUMBER 
    -------------------------
*/


/*----------------------------CODIGO JUNIOR----------------------------*/
//objetos

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }

// vamos a averiguar "si una persona es mayor de edad"
function mayor_edad(persona)
    {
        if(persona.edad >= 18)   //MAGIC NUMBER - Haz sacado de la manga el numero "18"
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            }
    }


/* ------EN EL CODIGO DE ARRIBA HAY BASTANTES FALLOS---------*/ 



/*----------------------------CODIGO SENIOR----------------------------*/

/* 
    BUENAS PRACTICAS 
        - Evitar "MAGIC NUMBER"  
        - Intentar Trabajar siempre  con una "ESTRUCTURA MODULAR"

*/

/*
    ---------------------------
        VARIABLES GLOBABLES
    ---------------------------
*/
const MAYORIA_EDAD_ESPANYA = 18;

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }


/*
    ------------------
        FUNCIONES
    ------------------
*/
// Funcion logica de la mayoria de edad
function mayorEdad(persona)
    {
        return persona.edad >= MAYORIA_EDAD_ESPANYA;
    }

//Funcion imprimir 
function imprimir(persona)
    {
        if (mayorEdad(persona)) //si la funcion "mayorEdad" hace un return "true" entra al if
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            } 
        }


/* 
    ------------------------
        FUNCIÓN PRINCIPAL
    ------------------------
*/


// funcion principal
function personaEsmayoEdad(persona)
        {
            imprimir(persona);
        }




