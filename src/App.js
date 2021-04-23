import React, { Component } from "react";

import InformacoesGerais from "./components/InformacoesGerais";
import Local from "./components/Local";
import Oportunidades from "./components/Oportunidades";
import LimiteCredito from "./components/LimiteCredito";
import Vendas from "./components/Vendas";
import TitulosFinanceiros from "./components/TitulosFinanceiros";
import Atividades from "./components/Atividades";

import {Cliente} from "./services/clienteResumo.js";

import "./App.css";
import "./index.css";

class App extends Component {

  constructor(){
    super();
    //Estas chamadas de metodo, simulam uma requisição na API para buscar os dados, porem o Json retornado esta salvo na pasta dados, em arquivos .json
    this.state = {
      json:{ 
          cliente : Cliente.buscarCliente(),
          local : Cliente.buscarLocal(),
          oportunidades : Cliente.buscarOportunidades(),
          credito : Cliente.buscarLimiteCredito(),
          vendas : Cliente.buscarVendas(),
          titulos : Cliente.buscarTitulosFinanceiros(),
          atividades : Cliente.buscarAtividades()
      }
    };
}

  render() {
    return (
      <section className="App">
        <div className="App-top-grid-container">
          <div className="App-top">
            <span><i className="fa fa-bars"></i></span>
          </div>
        </div>
        <div className="App-grid-container"> 
          <InformacoesGerais json={this.state.json}/>
          <Local json={this.state.json}/>
          <Oportunidades json={this.state.json}/>          
          <LimiteCredito json={this.state.json}/>          
          <Vendas json={this.state.json}/>    
          <TitulosFinanceiros json={this.state.json}/>
          <Atividades json={this.state.json}/>
        </div>
      </section>
    );
  }
}

export default App;
