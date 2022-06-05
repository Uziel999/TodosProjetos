var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }; //Chave representa um objeto
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 1, pontos: 0 };
var guilherme = { nome: "Guilherme", vitorias: 1, empates: 1, derrotas: 1, pontos: 0 };


function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos; //retorna na var calculaPontos 
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
guilherme.pontos = calculaPontos(guilherme);

var jogadores = [rafa, paulo, guilherme] //Escopo global


function exibeJogadoresNaTela() {
    var elemento = ''
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + " </td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick = 'adicionarVitoria(" + i + ")'>  Vitória </button></td>"
        elemento += "<td><button onClick = 'adicionarEmpate(" + i + ")'> Empate </button></td>"
        elemento += "<td><button onClick = 'adicionarDerrota(" + i + ")'> Derrota </button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = elemento


}
exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)

}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
        exibeJogadoresNaTela(jogadores)
}
//lógica dos pontos = se alguém empata tem que empatar com alguém
//validações da lista de potos,vitórias,derrotas,empates
//botão para zerar o placar
// adicionar jogador uso do push