import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import "./informacoesGerais.css";

const InformacoesGerais = ({url}) => {

    const [listacliente, setCliente] = useState([])    
    useEffect(() => { 
        busca(url, setCliente)
    }, [])

    if (listacliente.length){
        const cliente = listacliente[0];
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
                                <span>{cliente.nome}</span>
                            </div>
                            <div className="informacoesGerais-Identificacao-Apelido">
                                <span>{cliente.apelido}</span>
                            </div>
                            <div className="informacoesGerais-Identificacao-Ativo">
                                {
                                    cliente.ativo 
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
                                <span>{cliente.telefone}</span>
                            </div>
                            <div className="informacoesGerais-Contato-Telefone-descricao">
                                <span>Telefone</span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-icon">
                                <span><i className="fa fa-envelope"></i></span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-email">
                                <span>{cliente.email}</span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-descricao">
                                <span>E-mail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    };

    return (<div></div>);
}

export default InformacoesGerais;