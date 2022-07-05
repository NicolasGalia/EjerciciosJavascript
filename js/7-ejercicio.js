let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
let numero3 = parseInt(prompt("ingrese un tercer numero"));
if (numero1 > numero2 && numero1 > numero3 ) {
    document.write("el numero 1 es mayor: " + (numero1))
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("el numero 2 es mayor: "  + (numero2))
} else if (numero3 > numero2 && numero3 > numero1) {
    document.write("el numero 3 es mayor: " + (numero3))
}
 else if (numero1 === numero2 && numero1 === numero3 && numero2 === numero3) {
    document.write("los 3 numeros son iguales")
}
