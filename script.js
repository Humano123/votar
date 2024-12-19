let votosA = 0;
let votosB = 0;
let votosC = 0;
let title = document.getElementById('title').innerHTML = "Votar";
let mostrar = document.getElementById('s');
let a = "Você votou no candidato ";

document.getElementById('botaoA').onclick = function() { votar('A'); };
document.getElementById('botaoB').onclick = function() { votar('B'); };
document.getElementById('botaoC').onclick = function() { votar('C'); };

function votar(candidato) {
    if (candidato === 'A') {
        votosA++;
        botaoA();
    } else if (candidato === 'B') {
        votosB++;
        botaoB();
    } else if (candidato === 'C') {
        votosC++;
        botaoC();
    }
}

function mostrarResultados() {
    let total = votosA + votosB + votosC;

    let resultados = `
    <p>Candidato A: ${votosA} votos / ${(votosA / total * 100).toFixed(2)}%</p>
    <p>Candidato B: ${votosB} votos / ${(votosB / total * 100).toFixed(2)}%</p>
    <p>Candidato C: ${votosC} votos / ${(votosC / total * 100).toFixed(2)}%</p>
    `;
    document.getElementById('resultados').innerHTML = resultados;
}

function botaoA() {
    mostrar.innerHTML = a + "A";
}

function botaoB() {
    mostrar.innerHTML = a + "B";
}

function botaoC() {
    mostrar.innerHTML = a + "C";
}
