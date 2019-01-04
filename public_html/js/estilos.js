/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var elemento = document.getElementById("estilos");

elemento.style.backgroundColor = "#fff";
elemento.style.padding = "10xp";
elemento.style.margin = "0";

//clases 
//opción 1
elemento.className = "alert alert-info";
//opción 2 
elemento.className = elemento.className.replace("col-md-4", "alert alert-info");


var zoomBtn = function (){
    var boton = document.getElementById("boton");
    
    if(boton.style.width == "100%"){
        boton.style.width = "200px";
    }else{
        boton.style.width = "100%";
    }
    
    //boton.className = "alert alert-info";
    
};