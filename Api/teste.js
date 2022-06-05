function consultarCep() {
    let $cep = document.querySelector('#cep').value;
    let url = 'https://viacep.com.br/ws/' + $cep + '/json/';
    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.onerror = function(e) {

    }

    request.onload = () => {
        let response = JSON.parse(request.responseText);

        if (response === true) {

            document.querySelector('#res').innerHTML = 'CEP não encontrado!'
        } else {
            document.querySelector('#res').innerHTML = 'CEP: ' + response.cep + '<br>' + 'Cidade/UF: ' + response.localidade + '/' + response.uf;

        }
    }
    request.send();


}