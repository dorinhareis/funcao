function.calcularMedia(numeros) {
    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    const media = soma/numeros.lenght;
    return media;
}

const numeros = [10, 20, 30, 40,50];
console.log ("A média é: "+ calcularMedia(numeros));