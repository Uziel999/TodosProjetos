class Produto {

    constructor() {

        this.id = 0;
        this.nome = '';
        this.valor = 0;

    }
    salvar() {
        let produto = this.lerDados();



    }
    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto');
        produto.valor = document.getElementById('valor');
        return produto;


    }
    cancelar() {




    }
}
let produto = new Produto();