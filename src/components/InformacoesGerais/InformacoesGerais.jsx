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
                        <span><i className="fa fa-user-o"></i></span>
                    </div>                        
                    <div className="informacoesGerais-Identificacao">
                        <div className="informacoesGerais-Identificacao-grid-container">
                            <div className="informacoesGerais-Identificacao-Nome">
                                <span>{this.props.json.cliente.nome}</span>
                            </div>
                            <div className="informacoesGerais-Identificacao-Apelido">
                                <span>{this.props.json.cliente.apelido}</span>
                            </div>
                            <div className="informacoesGerais-Identificacao-Ativo">
                                {
                                    this.props.json.cliente.ativo 
                                        ?   <span className="Identificacao-Ativo">Ativo</span>
                                        :   <span className="Identificacao-Inativo">Inativo</span>
                                }
                            </div>
                        </div>
                    </div> 
                    <div className="informacoesGerais-Contato">
                        <div className="informacoesGerais-Contato-grid-container">
                            <div className="informacoesGerais-Contato-Telefone-icon">
                                <span><i className="fa fa-phone"></i></span>
                            </div>
                            <div className="informacoesGerais-Contato-Telefone-numero">
                                <span>{this.props.json.cliente.telefone}</span>
                            </div>
                            <div className="informacoesGerais-Contato-Telefone-descricao">
                                <span>Telefone</span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-icon">
                                <span><i className="fa fa-envelope"></i></span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-email">
                                <span>{this.props.json.cliente.email}</span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-descricao">
                                <span>E-mail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default InformacoesGerais;