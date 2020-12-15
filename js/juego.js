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
  document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+intentos;

}

function adivinar(){
    
   if (contResp<intentos)
   {
    var numero = document.getElementById("numero").value;
    if (numero>0 && numero<100)
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
        respuestas="<br>El número buscado es <span>MAYOR</span> a "+numero;
        document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+falta;
      }else{
        // adivinaste
        respuestas="<br>¡¡¡ADIVINASTE!!! en número era "+numero;
        document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: "+falta;
        fin()
      }
      // vaciar el valor del numero
      document.getElementById("numero").value="";
    }
    else{
      respuestas="<br>"+numero+" ¡ERROR! Tiene que ser un valor numerico comprendido entre 1 y 100";

    }
   }
   else{
    document.getElementById("cantIntentos").innerHTML = "Cantidad de intentos: 0";
     respuestas="<br> ¡¡Se acabarón los intentos!! el numero era "+numeroAdivinar;
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
 }
