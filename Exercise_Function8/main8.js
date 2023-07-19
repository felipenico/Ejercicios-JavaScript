var entrada = document.querySelector("input");
entrada.focus();

function mostrarTexto() {
  alert(entrada.value);
  entrada.value = "";
  entrada.focus();
}

var boton = document.querySelector("button");
boton.onclick = mostrarTexto;
