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

let palavra;
let letras;
let erros;
let erradas;
let fimDeJogo;

let vitorias = 0;
let derrotas = 0;

const desenhos = [
    "",
    "O",
    "O<br>|",
    "O<br>/|",
    "O<br>/|\\",
    "O<br>/|\\<br>/",
    "O<br>/|\\<br>/ \\"
];

function iniciarJogo() {

    palavra =
        palavras[Math.floor(Math.random() * palavras.length)];

    letras = [];
    erros = 0;
    erradas = [];
    fimDeJogo = false;

    document.getElementById("mensagem").innerHTML = "";

    atualizarTela();
}

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

    document.getElementById("vitorias").textContent =
        vitorias;

    document.getElementById("derrotas").textContent =
        derrotas;

    document.getElementById("forca").innerHTML =
        desenhos[erros];

    verificarFimDeJogo(exibicao);
}

function verificarFimDeJogo(exibicao) {

    const venceu = !exibicao.includes("_");

    if (venceu && !fimDeJogo) {

        fimDeJogo = true;

        vitorias++;

        document.getElementById("mensagem").innerHTML =
            "🎉 <strong>Você venceu!</strong>";

        atualizarTela();
    }

    if (erros >= 6 && !fimDeJogo) {

        fimDeJogo = true;

        derrotas++;

        document.getElementById("mensagem").innerHTML =
            `😢 <strong>Você perdeu!</strong><br>
             Palavra: <strong>${palavra}</strong>`;

        atualizarTela();
    }
}

function tentarLetra() {

    if (fimDeJogo) return;

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

function novoJogo() {

    iniciarJogo();
}

iniciarJogo();