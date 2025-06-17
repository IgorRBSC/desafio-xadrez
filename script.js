const tabuleiro = document.getElementById('tabuleiro');

// Peças representadas com emojis
const pecas = {
    torre: ['♖', '♜'],
    cavalo: ['♘', '♞'],
    bispo: ['♗', '♝'],
    rainha: ['♕', '♛'],
    rei: ['♔', '♚'],
    peao: ['♙', '♟︎']
};

function criarTabuleiro() {
    const ordem = [
        ['torre', 'cavalo', 'bispo', 'rainha', 'rei', 'bispo', 'cavalo', 'torre'],
        Array(8).fill('peao')
    ];

    for (let linha = 0; linha < 8; linha++) {
        for (let coluna = 0; coluna < 8; coluna++) {
            const casa = document.createElement('div');
            casa.classList.add('casa');
            const cor = (linha + coluna) % 2 === 0 ? 'branca' : 'preta';
            casa.classList.add(cor);

            // Colocar peças
            if (linha === 0) {
                casa.innerText = pecas[ordem[0][coluna]][1]; // Peças pretas
            } else if (linha === 1) {
                casa.innerText = pecas['peao'][1]; // Peões pretos
            } else if (linha === 6) {
                casa.innerText = pecas['peao'][0]; // Peões brancos
            } else if (linha === 7) {
                casa.innerText = pecas[ordem[0][coluna]][0]; // Peças brancas
            }

            tabuleiro.appendChild(casa);
        }
    }
}

criarTabuleiro();
