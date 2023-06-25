let ingrediente = document.querySelector("input");
let agregarbo = document.getElementById("agregar");
let vaciarbo = document.getElementById("vaciar");
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let contador = 1;
let ingredientes = [];
function vaciarI() {
  ingredientes = [];
  console.log(ingredientes);
}
function agregar() {
  let v = false;
  if (ingredientes.length == cantidad) {
    alert("Ya agregaste TODOS los Ingredientes");
    document.write(
      "<h2>" + "Los Ingredientes son los Siguientes: " + "<br/>" + "<h2/>"
    );
    for (let n = 0; n < ingredientes.length; n++) {
      document.write(
        "<h3>" + (n + 1) + ". " + ingredientes[n] + "<br/>" + "</h3>"
      );
    }
    return;
  }
  for (let i = 0; i < ingredientes.length; i++) {
    if (ingrediente.value == ingredientes[i]) {
      alert("...<<<<< Ya ingresaste este ingrediente >>>>...");
      v = true;
      break;
    }
  }
  if (v == false) {
    ingredientes.push(ingrediente.value);
    //alert(ingredientes);
    console.log(ingredientes);
  }
  ingrediente.focus();
}
ingrediente.focus();
agregarbo.onclick = agregar;
vaciarbo.onclick = vaciarI;
