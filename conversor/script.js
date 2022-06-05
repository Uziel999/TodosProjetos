function conversao() {

    var valor1 = document.querySelector('#valor1').value;
    var valor2 = document.querySelector('#valor2').value;
    var resposta = document.querySelector('#resultado');


    //regra de negocio
    var tensao = valor1 * valor2;
    var corrente = valor1 / valor2;
    var resistencia = valor1 / valor2;

    if (valor1 == '' || valor2 == '') {
        alert('Falta dados')

    } else {
        verficarTensao(tensao);
        verficarCorrente(corrente);
        verificarResistencia(resistencia);
    }

    function verficarTensao(tensao) {


    }

    function verficarCorrente(corrente) {

    }

    function verificarResistencia(resistencia) {

    }

}
//limpa os campos
function limpaCampos(){
      
    }



// Modo notuno
function noturno() {
    var elemeto = document.body;
    elemeto.className = "modo-noturno";

}

function claro() {
    var elemeto = document.body;
    elemeto.className = "modo-claro";

}