function calcularimc(p, a) {
  return p / (a * a);
}
nombre = prompt("Digite su nombre: ");
PesoCor = parseFloat(prompt(nombre + " digita tu peso corporal(kg): "));
altura = parseFloat(prompt(nombre + " digita tu altura(en metros): "));

imc = calcularimc(PesoCor, altura);
document.write(nombre + " su indice de masa corporal es: " + imc);
document.write("<br/>");
if (imc < 18.5) {
  document.write("Sufre de Insuficiencia Ponderal");
} else if (imc >= 18.5 && imc <= 24.9) {
  document.write("Su IMC es normal");
} else if (imc >= 25 && imc <= 29.9) {
  document.write("Sufre de sobrepeso");
  document.write("<br/>");
  document.write("y entra a la etapa de PreObesidad");
} else if (imc >= 30 && imc <= 34.9) {
  document.write("Sufre de Obesidad tipo I");
} else if (imc >= 35 && imc <= 39.9) {
  document.write("Sufre de Obesidad tipo II");
} else {
  document.write("Sufre de Obesidad tipo III");
}
