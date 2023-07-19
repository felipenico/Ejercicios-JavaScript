let iniSesionRegistrado = "alura";
let contraRegistrada = "alura321";
i = 1;
while (i <= 3) {
  i++;
  let iniIngresado = prompt("Ingrese su usuario");
  let contraIngresada = prompt("Ingrese su contraseña");
  if (
    iniSesionRegistrado == iniIngresado &&
    contraRegistrada == contraIngresada
  ) {
    alert("Bienvenido al sistema " + iniIngresado);
    break;
  } else {
    alert("Inicio de sesión inválido. Favor intente de nuevo");
  }
}
if (
  iniSesionRegistrado != iniIngresado ||
  contraRegistrada != contraIngresada
) {
  alert("Intentos Maximos Permitidos Alcanzados...,intente mas tarde");
}
