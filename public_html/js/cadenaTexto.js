/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cadenaTexto = "Este es una cadena de texto";

//Cuenta la cadena
var contarCaracteres = cadenaTexto.length;
document.write(contarCaracteres + "<br/>");

//Corta la cadena desde posiciones 
var cortarCadena = cadenaTexto.substring(0,15);
document.write(cortarCadena + "<br/>");

//toda la cadena
var buscarPosicionDeUnCaracter = cadenaTexto.indexOf("e"); 
document.write(buscarPosicionDeUnCaracter + "<br/>");

//buscar desde una posición
var buscarPosicionDeUnCaracterPosicion = cadenaTexto.indexOf("e", 8 );
document.write(buscarPosicionDeUnCaracterPosicion + "<br/>");

//buscar desde la última posición 
var buscarPosicionDeUnCaracterPosicionUltimo = cadenaTexto.lastIndexOf("e");
document.write(buscarPosicionDeUnCaracterPosicionUltimo + "<br/>");

//Reemplazar la cadena 
var reemplazar = cadenaTexto.replace(cadenaTexto, "Texto reemplazado ");
document.write(reemplazar + "<br/>");

//Reemplazar palabra  
var reemplazarPalabra = cadenaTexto.replace("es ", "Texto reemplazado ");
document.write(reemplazarPalabra + "<br/>");

//Mayúsculas 
var cadenaMayuscula = cadenaTexto.toLocaleUpperCase();
document.write(cadenaMayuscula + "<br/>");

//Minúsculas 
var cadenaMinuscula = cadenaTexto.toLowerCase();
document.write(cadenaMinuscula + "<br/>");