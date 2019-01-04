/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Numerico - float
var numero = 21;
var float = 21.5;

document.write(" Numero: " + numero);
document.write(" Float: " + float);

//String - Cadena de texto
var nombre = "Jean";
document.write(" Cadena de texto: " + nombre);

//Bolean - boleano
var boleano = true;
document.write(" Boleano: " + boleano);

//Array - Arreglo 
var amigos = ["Item 1","Item 2","Item X", numero, boleano];
document.write(" Primer item del arreglo: " +amigos[1]);

//Objeto - Object 
var objeto = {
    color: "Blanco",
    size: 12
};

document.write(objeto);

//Undefined
var variableNoDefinida;
document.write(" Variable no definida: " + variableNoDefinida);

//Null 
var nulo = null;
document.write(" Variable nulo: " + nulo);

//NaN 
var variableInvalido = numero * nombre;
document.write(" variable no valida: " + variableInvalido );

