let lista = [2, 3, 4, 5, 6, 7]; //Asi es que como se inicializa un array
let entrada = document.querySelector("input");

function verificar() {
  let ver = false;
  for (let i = 0; i < lista.length; i++) {
    //el elemento .length permite saber la longitud de la lista o mejor dicho el numero de elementos que contiene
    if (parseInt(entrada.value) == lista[i]) {
      alert("Usted Acerto el Numero!!"); //Genera una ventana emergente de manera subita
      ver = true;
      break;
    }
  }
  if (ver == false) {
    alert("No Acertaste");
  }
  entrada.focus();
}
entrada.focus();
let boton = document.querySelector("button");
boton.onclick = verificar;
