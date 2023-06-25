var numeroL = parseInt(prompt("Digite un numero a su gusto: "));
var numeroPensado = Math.round(Math.random() * numeroL);
var numeroLanzado = parseInt(prompt("Ingrese un número entre 0 - " + numeroL));
//  Adivinando el Numero
if (numeroPensado == numeroLanzado) {
  document.write("<h2>Usted Acerto!!!</h2>");
} else if (numeroLanzado > numeroPensado) {
  document.write("<h3>El numero que escribio es mayor</h3>");
} else {
  document.write("<h3>El numero que escribio es menor</h3>");
}
