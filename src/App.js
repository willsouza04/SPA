import React, { Component } from "react";

import Local from "./components/Local";
import InformacoesGerais from "./components/InformacoesGerais";

import {Cliente} from "./services/clienteResumo.js";

import "./App.css";
import "./index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      json:{ 
          cliente : Cliente.buscarCliente(),
          address : Cliente.buscarAddress()
      }
    };
    
    console.log(this.state.json);

  }

  render() {
    return (
      <section className="App">
        <div className="App-top"/>
        <div className="App-grid-container"> 
          <InformacoesGerais json={this.state.json}/>
          <Local json={this.state.json}/>
        </div>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
