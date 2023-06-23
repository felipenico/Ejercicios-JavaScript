let entrada = document.querySelector("input");
let numero = parseInt(prompt("Digite la cantidad de numeros: ")); //prompt entrada por teclado
let lista = agregarN(numero);
console.log(lista); // console.log() Nos permite visualizar este valor desde la consola del navegador web(mantenmos las teclas ctrl + alt y presionamos i)

function ale() {
  return Math.round(Math.random() * 20); //Generando numero random
}

function agregarN(fr) {
  let lis = []; //Array vacio
  //console.log(lis.length)
  let con = 0;
  while (con < fr) {
    // Recorremos y llenamos la lista de numeros
    let alea = ale();
    let vd = false;
    for (i = 0; i < lis.length; i++) {
      // Evaluamos que no se repitan numeros aleatorios, y sino se repiten los guardamos en el array
      if (alea == lis[i]) {
        //Evaluamos numeros repetidos
        vd = true;
        break;
      }
    }
    if (vd == false) {
      //Agregamos numeros que no estan repetidos
      lis.push(alea); // .push() permite agregar valores o variables al final de la lista,por ejemplo es un .append() en python
      con++;
    }
  }
  return lis;
}

function verificar() {
  let ver = false;
  for (i = 0; i < lista.length; i++) {
    //el elemento .length permite saber la longitud de la lista o mejor dicho el numero de elementos que contiene
    if (parseInt(entrada.value) == lista[i]) {
      //Utilizacion de indices en los arrays
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
