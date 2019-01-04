/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var elementosEtiquetaH = document.getElementsByTagName("h1");


//obtener todos los elementos de una etiqueta 
var elementosEtiquetaP = document.getElementsByTagName("p");
document.write(elementosEtiquetaP.length + "<br/>");

document.write(elementosEtiquetaP[0].innerHTML + "<br/>");

//obtener elemtos desde su Id 
var elementoById = document.getElementById("elementoP");
document.write(elementoById.innerHTML);

//Nodos
//crear elemento
var elemento = document.createElement("h6");
//crear un nodo de texto 
var contenido = document.createTextNode("Este es el contenido de un nodo básico");
//añadir el nodo al elemnto 
elemento.appendChild(contenido);
//Agregar atributos al elemento
elemento.setAttribute("class", "alert alert-warning");
//agregar el elemento al documento 
document.getElementById("nodo").appendChild(elemento);

//posicionar elementos de nodo
var lista = document.createElement("li"),
    contenidoLista = document.createTextNode("Lista de li");

lista.setAttribute("class","alert alert-success");

lista.appendChild(contenidoLista);

//Agregarlo al documento <ol/>
//Opción 1 
var ol = document.getElementById("lista");
//Opnción 2 
//var ol = document.getElementsByTagName('li')[0].parentNode;
ol.appendChild(lista);

//modificar a nodos 
var elementoDiv = document.getElementById("elementoP");
//acceder al contenido 
document.write("<br/>innerHTML<br/>" + elementoDiv.innerHTML);
//o 
document.write("<br/>Text content<br/>" + elementoDiv.textContent);

//cambiar valores 
elementoDiv.innerHTML = elementoDiv.innerHTML + "<div class=\"alert alert-info\" > Texto agregado en javascript nodo </div>";

//reemplazar valores del DOM 
var referencia = document.createElement("li"), 
         conten = document.createTextNode("reemplazo");
 referencia.appendChild(conten);
 
var rem = document.getElementById("remplazo");
 
var padre = document.getElementById("remplazo").parentNode;

padre.replaceChild( referencia , rem);

//eliminar nodo
var eliminar = document.getElementById("eliminar");

padre.removeChild(eliminar);

//Acceso a los atributos del DOM
var padreContenedor = document.getElementById("contenedor");
var refe = document.getElementById("divCon");
refe.setAttribute("class", "card-body d-flex flex-column align-items-start");
refe.textContent = "texto";

var enlace = document.createElement("a"), 
        c = document.createTextNode("enlace");
enlace.appendChild(c);
enlace.href = "http://blancopropiedades.cl";
enlace.setAttribute("target", "_blank");

refe.appendChild(enlace);

//Texto abajo
var elementoAtributo = document.createElement("div"), 
        contenidoA = document.createTextNode("Texto");
elementoAtributo.appendChild(contenidoA);

elementoAtributo.setAttribute("class" , "alert alert-info");
document.body.appendChild(elementoAtributo);

