var validacion;
function guardarDatos(){
    var nom= document.getElementById('nom').value;
    var apel= document.getElementById('apel').value;
    var color= document.getElementById('color').value;
    var fruta= document.getElementById('fruta').value;
    var concat = nom+ " "+apel;
    var usuario=document.getElementById("datos");
    
    if (nom==""){
        alert("Ingrese su nombre");
        return;
    }
    if (color==""){
        alert("Ingrese su color favorito")
        return;
    }
    
    if (fruta=="Zanahoria"){
        alert(fruta+" no es una fruta");
        return;
    }
    else{
        usuario.innerHTML= `
        <h5 class="alert alert-success">Hola ${concat}, tambien me gusta el ${color} pero prefiero el Durazno, en lugar de la ${fruta}.<h5>
    `;
    validacion=nom+" "+apel;
    }
}

function play(){
    if (validacion==undefined){
        alert("Debe identificarse primero");
        return;
    }
    else{
       alert("Bien hecho "+validacion);
       window.location.assign("game.html");
       return;
    }
  }
