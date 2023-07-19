
var entrada = document.querySelector("input");
var boton = document.querySelector("button");

function verificar() {
  if (parseInt(entrada.value) == secreto) {
    alert("Usted Acerto!!");
  } else {
    alert("Usted No Acerto");
    entrada.value = ""; // esta linea elimina el numero que escribimos en el texto editable
    //mejor legibilidad al usuario
    entrada.focus(); //Esta accion nos envia automaticamente al objeto, sin tener que ir por medio del cursor
  }
}
var secreto = 5;
entrada.focus();
boton.onclick = verificar;
