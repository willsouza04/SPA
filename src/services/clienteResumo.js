export class Cliente{

    static buscarCliente() {
        return require('../dados/cliente.json');
    }

    static buscarLocal() {
        return require('../dados/local.json');
    }

    static buscarOportunidades() {
        return require('../dados/oportunidades.json');
    }

    static buscarLimiteCredito() {
        return require('../dados/limiteCredito.json');
    }

    static buscarVendas() {
        return require('../dados/vendas.json');
    }

    static buscarTitulosFinanceiros() {
        return require('../dados/titulosFinanceiros.json');
    }

    static buscarAtividades() {
        return require('../dados/atividades.json');
    }
}