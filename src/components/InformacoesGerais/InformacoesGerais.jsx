import React, { Component } from "react";
import "./informacoesGerais.css";

class InformacoesGerais extends Component {

    render() {    
        return (
            <div className="informacoesGerais">                
                <div className="informacoesGerais-grid-container"> 
                    <div className="informacoesGerais-titulo">
                        <span>Informações gerais</span>
                    </div>
                    <div className="informacoesGerais-icon">
                        <span>US</span>
                    </div>                        
                    <div className="informacoesGerais-Nome">
                        <h4 className="text-center">{this.props.json.cliente.nome}</h4>
                        <h5 className="text-center">{this.props.json.cliente.apelido}</h5>
                    </div> 
                    <div className="informacoesGerais-Contato">
                        <h4 className="text-center">{this.props.json.cliente.telefone}</h4>
                        <h5 className="text-center">{this.props.json.cliente.email}</h5>
                    </div>
                </div>
            </div>  
        );
    }
}

export default InformacoesGerais;