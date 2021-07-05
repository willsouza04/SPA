import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./components/UI/temas"

import InformacoesGerais from "./components/InformacoesGerais/InformacoesGerais";
import Local from "./components/Local/Local";
import Oportunidades from "./components/Oportunidades/Oportunidades";
import LimiteCredito from "./components/LimiteCredito/LimiteCredito";
import Vendas from "./components/Vendas/Vendas";
import TitulosFinanceiros from "./components/TitulosFinanceiros/TitulosFinanceiros";
import Atividades from "./components/Atividades/Atividades";

import "./App.css";
import "./index.css";

const Container = styled.div`
  text-align: center;
  background-color: ${({theme}) => theme.body};
  color: ${({ theme }) => theme.text};
`


function App() { { 
  
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <Container>
          <div className="App-top">
            <span><i className="fa fa-bars"></i></span>
            <a onClick={toggleTema}><i class="fa fa-lightbulb-o"></i></a>
          </div>
          <div className="App-container"> 
            <div className="App-informacoes"> 
              <InformacoesGerais url={'/cliente'}/>                    
              <Local url={'/local'} theme={tema ? temaClaro : temaEscuro}/>          
              <Oportunidades url={'/oportunidades'}/>
              <LimiteCredito url={'/limitecredito'}/>          
              <Vendas url={'/vendas'}/>    
              <TitulosFinanceiros url={'/titulosfinanceiros'}/>
            </div>
            <div className="App-atividades">            
              <Atividades url={'/atividades'}/>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
