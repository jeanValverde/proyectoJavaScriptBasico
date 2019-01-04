/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (){
    
    var boton = document.getElementById("boton");
    
    var funcion = function (e){
        alert("Evento saludo de tipo: " + e.type );
    };
    
    boton.addEventListener("click", funcion);
    
}());


(function (){
    
    var boton = document.getElementById("boton2");
    
    var funcion = function (){
        console.log("focus");
        boton.value =  "focus";
    };
    
    boton.addEventListener("focus", funcion);
    
}());


(function (){
    
    var boton = document.getElementById("boton3");
    
    var funcion = function (){
        console.log("change");
        boton.value =  "change";
    };
    
    boton.addEventListener("change", funcion);
    
}());