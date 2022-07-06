const frase = prompt("Escriba una frase");
for(let i = 0; i < frase.length; i++){
    const letras = frase.charAt(i);
    if ((letras == "a") || (letras == "e") || (letras == "i") || (letras == "o") || (letras == "u")) {
        document.write(letras);
    }
}

