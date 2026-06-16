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

let letras = [];
let erros = 0;
let erradas = [];

function atualizarTela() {

    let exibicao = "";

    for (let char of palavra) {

        if (letras.includes(char)) {

            exibicao += char + " ";

        } else {

            exibicao += "_ ";
        }
    }

    document.getElementById("palavra").textContent = exibicao;

    document.getElementById("erros").textContent = erros;

    document.getElementById("erradas").textContent =
        erradas.join(" ");
}

function tentarLetra() {

    const letra =
        document.getElementById("letra")
        .value
        .toLowerCase();

    if (
        letra &&
        !letras.includes(letra)
    ) {

        letras.push(letra);

        if (!palavra.includes(letra)) {

            erros++;

            erradas.push(letra);
        }
    }

    document.getElementById("letra").value = "";

    atualizarTela();
}

atualizarTela();