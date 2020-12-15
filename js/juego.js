 // buscamos un numero aleatorio entre 1 y 100
 var numeroAdivinar=Math.floor((Math.random()*100)+1);
 var contResp=1;
 var intentos;

function enviar(){
  intentos = document.getElementById("intentos").value;
  document.getElementById("intentos").disabled=true;
  document.getElementById("btn-enviar").disabled=true;
  document.getElementById("numero").disabled=false;
  document.getElementById("btn-adivinar").disabled=false;
  document.getElementById("btn-salir").disabled=false;
  document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+intentos;

}

function adivinar(){
    
   if (intentos>contResp )
   {
    var numero = document.getElementById("numero").value;
    if (numero>0 && numero<101)
    {
      // aumento contador
      contResp= contResp+1;
      falta=intentos-contResp+1;
      // diminuye intentos
      if (numero>numeroAdivinar){
        //numero mas grande
        respuestas="<br>El número buscado es <span>MENOR</span> a "+numero;
        document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+falta;
      }else if(numero<numeroAdivinar){
        //numero mas chico
        respuestas="<br>El número buscado es MAYOR a "+numero;
        document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+falta;
      }else{
        // adivinaste
        respuestas="<br><span class='alert-success'>¡¡¡ADIVINASTE!!! el número era "+numero+"</span>";
        document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+falta;
        fin()
      }
      // vaciar el valor del numero
      document.getElementById("numero").value="";
    }
    else{
      respuestas="<br><span class='alert-danger'> ¡ERROR! Tiene que ser un valor numerico comprendido entre 1 y 100</span>";

    }
   }
   else{
    document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: 0";
     respuestas="<br><span class='alert-danger'>¡¡Se acabarón los intentos!! el numero era "+numeroAdivinar+"</span>";
     fin()
   }
   
   document.getElementById("respuestas").innerHTML = respuestas;
 }

 // Funcion que se ejecuta al finalizar el juego
 // ya sea por haber descubierto el numero o por finalizar el numero de
 // intentos
 function fin()
 {
    document.getElementById("numero").disabled=true;
    document.getElementById("btn-adivinar").disabled=true;
    document.getElementById("btn-volver").disabled=false;
 }
function volver(){
  window.location.assign("game.html");
}

function salir(){
  window.location.assign("index.html");
}
