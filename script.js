const palavras = [
    "abacaxi",
    "elefante",
    "bicicleta",
    "montanha",
    "girassol",
    "helicoptero",
    "chocolate",
    "astronauta",
    "cachoeira",
    "camiseta"
];

const palavra =
    palavras[Math.floor(Math.random() * palavras.length)];

let exibicao = "";

for (let i = 0; i < palavra.length; i++) {
    exibicao += "_ ";
}

document.getElementById("palavra").textContent = exibicao;