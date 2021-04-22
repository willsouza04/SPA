export class Cliente{

    static buscarCliente() {
        return require('../dados/cliente.json');
    }

    static buscarAddress() {
        return require('../dados/address.json');
    }
}