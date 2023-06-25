let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let contador = 1;

while (contador <= cantidad) {
  let ingrediente = prompt("Informe el ingrediente " + contador + ": ");
  let v = false;
  for (i = 0; i < ingredientes.length; i++) {
    if (ingrediente == ingredientes[i]) {
      v = true;
      alert("El ingrediente se repite.. Por favor Digite otro..");
    }
  }
  if (v == false) {
    ingredientes.push(ingrediente);
    contador++;
  }
}
document.write("<h3>Los ingredientes son los siguientes: </h3>");
for (n = 0; n < ingredientes.length; n++) {
  document.write("<h3>" + (n + 1) + ". " + ingredientes[n] + "<br/>" + "</h3>");
}
