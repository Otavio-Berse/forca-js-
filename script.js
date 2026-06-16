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
    "camiseta",
    "escola",
    "janela",
    "futebol",
    "praia",
    "viagem"
];

const palavra =
    palavras[Math.floor(Math.random() * palavras.length)];

let letras = [];
let erros = 0;
let erradas = [];
let fimDeJogo = false;

function atualizarTela() {

    let exibicao = "";

    for (let char of palavra) {

        if (letras.includes(char)) {

            exibicao += char + " ";

        } else {

            exibicao += "_ ";
        }
    }

    document.getElementById("palavra").textContent =
        exibicao;

    document.getElementById("erros").textContent =
        erros;

    document.getElementById("erradas").textContent =
        erradas.join(" ");

    verificarFimDeJogo(exibicao);
}

function verificarFimDeJogo(exibicao) {

    const venceu = !exibicao.includes("_");

    if (venceu) {

        fimDeJogo = true;

        document.getElementById("mensagem").innerHTML =
            "🎉 <strong>Você venceu!</strong>";
    }

    if (erros >= 6) {

        fimDeJogo = true;

        document.getElementById("mensagem").innerHTML =
            `😢 <strong>Você perdeu!</strong><br>
            A palavra era: <strong>${palavra}</strong>`;
    }
}

function tentarLetra() {

    if (fimDeJogo) {
        return;
    }

    const campo =
        document.getElementById("letra");

    const letra =
        campo.value.toLowerCase();

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

    campo.value = "";

    atualizarTela();
}

atualizarTela();