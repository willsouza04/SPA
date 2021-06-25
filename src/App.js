import React, { Component } from "react";

import InformacoesGerais from "./components/InformacoesGerais/InformacoesGerais";
import Local from "./components/Local/Local";
import Oportunidades from "./components/Oportunidades/Oportunidades";
import LimiteCredito from "./components/LimiteCredito/LimiteCredito";
import Vendas from "./components/Vendas/Vendas";
import TitulosFinanceiros from "./components/TitulosFinanceiros/TitulosFinanceiros";
import Atividades from "./components/Atividades/Atividades";

import "./App.css";
import "./index.css";


class App extends Component {

  render() {
    return (
      <section className="App">
        <div className="App-top">
          <span><i className="fa fa-bars"></i></span>
        </div>
        <div className="App-grid-container"> 
          <div className="App-grid-informacoes"> 
            <InformacoesGerais url={'/cliente'}/>                    
            <Local url={'/local'}/>          
            <Oportunidades url={'/oportunidades'}/>
            <LimiteCredito url={'/limitecredito'}/>          
            <Vendas url={'/vendas'}/>    
            <TitulosFinanceiros url={'/titulosfinanceiros'}/>
          </div>
          <div className="App-grid-atividades">            
            <Atividades url={'/atividades'}/>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
