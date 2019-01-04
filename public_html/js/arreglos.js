/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arreglos desde la posición 0 

//Arregos
var personas = ["Persona 1", "Persona 2","Persona 3","Persona X"];

//Acceder a una posición del arreglo 
document.write(personas[3] + "<br/>");


personas[3] = "Persona cambio";
document.write(personas[3] + "<br/>");



//Metodos y propiedades para los arreglos 

//Contar los elementos del arreglo 
document.write("Numero de elementos del arreglo: " + personas.length + "<br/>");


//Agregar un objeto al final del arreglo

//1
personas[personas.length] = "Otra persona";

document.write(personas + "<br/>");

//2
personas.push("Persona 10", "Persona 11" , "Persona 12");
document.write(personas + "<br/>");


//Eliminar el ultimo objeto del arreglo
personas.pop();
document.write(personas + "<br/>");


//Concatenar arreglos 
var familia = ["Familia 1" , "Familia 2" , "Familia 3"];

var arregloUnido = personas.concat(familia);

document.write(arregloUnido + "<br/>");


//join 
document.write(personas.join(", ") + "<br/>");

//Orden de elementos 
document.write(personas.sort() + "<br/>");

document.write(personas.reverse()+ "<br/>");

