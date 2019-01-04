/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Funciones 
function miPrimeraFuncion(dato){
    document.write("El dato es: " + dato);
}

function sumar(num1 , num2){
    var resultado = num1 + num2;
    return resultado;
}


var suma = function (){
  
  //parseFloat convierte su argumento, 
  //una cadena, y devuelve un número de punto flotante
  var numero1 = parseFloat(document.getElementById("num1").value);
  var numero2 = parseFloat(document.getElementById("num2").value);
  
  var resultado = sumar(numero1, numero2);
  
  
  var cuadroDialogo = document.getElementById("resultado");
  
  //escribimos el resultado en el div resultado
  cuadroDialogo.innerHTML = resultado;
    
};
