/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Condicionales IF
var username = "jean";
var password = "password";
document.write("Condicionales <br/>");
if(username === "jean" && password === "password" ){ //Se cumplen todas las condiciones
    document.write("Welcome jean");
    /*
     * Todo el contenido
     * 
     * >   Menor que
     * <   Mayor que 
     * >=  Mayor o igual 
     * <=  Menos o igual 
     * === Igual que con tipo de dato
     * ==  Igual que sin importar el tipo de dato 
     * !=  Distinto de
     * 
     */
}else if(username === "diego" || password === "password"){//Solo si se cumple una condición
    document.write("Welcome diego");
}else{
    document.write("Welcome anonimo");
}

//



