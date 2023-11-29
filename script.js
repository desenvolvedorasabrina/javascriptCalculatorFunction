function calculator(){

    let valorEntrada = parseInt(document.getElementById("valorEntrada").value)
}

if (valorEntrada <=10 || !Number.isInteger(valorEntrada)){
    alert("Erro: Entrada inválida!")
}

let adiciona = 0;
let mostrarSoma = {}

for (let atributo = 1; atributo <=valorEntrada; atributo++) {
    if (atributo % atributo === 1){
        adiciona += atributo
        mostrarSoma.push(atributo)
    }
}

document.getElementById("adiciona").innerText = `Total da soma é: ${adiciona}` 
document.getElementById("mostrarSoma").innerText = `E os numeros somados foram: ${mostrarSoma}`