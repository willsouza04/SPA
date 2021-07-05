import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { busca } from '../../services/api'
import "./informacoesGerais.css";

const Container = styled.div`
    background-color: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(${({theme}) => theme.shadow}, 0.16), 0 2px 10px 0 rgba(${({theme}) => theme.shadow}, 0.12);    
    flex-grow: 1;
`

const InformacoesGerais = ({url}) => {

    const [listacliente, setCliente] = useState([])    
    useEffect(() => { 
        busca(url, setCliente)
    }, [])

    if (listacliente.length){
        const cliente = listacliente[0];
        return (
            <div className="informacoesGerais">  
                <Container>            
                <div className="informacoesGerais-container"> 
                    <div className="informacoesGerais-titulo">
                        <span>Informações gerais</span>
                    </div>
                    <div className="informacoesGerais-centro">
                        <div className="informacoesGerais-icon">
                            <span><i className="fa fa-user-o"></i></span>
                        </div>                        
                        <div className="informacoesGerais-Identificacao">
                            <div className="informacoesGerais-Identificacao-container">
                                <div className="informacoesGerais-Identificacao-Nome">
                                    <span>{cliente.nome}</span>
                                </div>
                                <div className="informacoesGerais-Identificacao-Apelido">
                                    {cliente.apelido}
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
                    </div>
                    <div className="informacoesGerais-Contato">
                        <div className="informacoesGerais-Contato-Telefone-container">
                            <div className="informacoesGerais-Contato-Telefone-icon">
                                <span><i className="fa fa-phone"></i></span>
                            </div>
                            <div className="informacoesGerais-Contato-Telefone-numero-container">
                                <div className="informacoesGerais-Contato-Telefone-numero">
                                    <span>{cliente.telefone}</span>
                                </div>
                                <div className="informacoesGerais-Contato-Telefone-descricao">
                                    <span>Telefone</span>
                                </div>
                            </div>
                        </div>
                        <div className="informacoesGerais-Contato-Email-container">
                            <div className="informacoesGerais-Contato-Email-icon">
                                <span><i className="fa fa-envelope"></i></span>
                            </div>
                            <div className="informacoesGerais-Contato-Email-email-container">
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
                </Container>  
            </div>  
        );
    };

    return (<div></div>);
}

export default InformacoesGerais;