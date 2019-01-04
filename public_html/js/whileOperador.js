/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Operador While 
var personas = ["Jean", "Diego", "Eliu", "Tamara"];
var i = personas.length -1;

while(i <= 3){//Se ejecuta solo si se cumple la condición
    document.write(i + "<br/>");
    i++;
}

do {
    //Siempre se ejecuta
    document.write("Do while");
}while (i===3)//Se detiene cuando

