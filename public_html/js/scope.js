/* 
 * 
 * Variables locales y globales
 * Local: Variables creadas dentro de una funcion. 
 * Global: Podemos acceder a ellas desde cualquier parte de código.
 */

//Proteccion de accedo a las variables 
/*
 * 
 * (function (){
      //Solo esta funcion tiene acceso a las variables 
      //Los programas de terceros no pueden acceder a este código 
   }());
 */

(function (){
    var variableGobal = "Variable Global";
    
    var funcion = function (){
        alerta(variableGobal);
        
        var variableLocal = "Solo en la funcion";
        
        var funcionLocal = function (){
          var variableLocal = "Esta es variable dentro de una funcion local";
          
        };
        
    };
    
}());