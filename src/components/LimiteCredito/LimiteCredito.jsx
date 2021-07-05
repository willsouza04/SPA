import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { busca } from '../../services/api'
import "./limiteCredito.css";

const Container = styled.div`
    background-color: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(${({theme}) => theme.shadow}, 0.16), 0 2px 10px 0 rgba(${({theme}) => theme.shadow}, 0.12);    
    flex-grow: 1;
`

const LimiteCredito = ({url}) =>  {

    const [listacredito, setCredito] = useState([])    
    useEffect(() => { 
        busca(url, setCredito)
    }, [])

    if (listacredito.length) {  
        const credito = listacredito[0];  
        return (
            <div className="limiteCredito">  
                <Container>          
                <div className="limiteCredito-grid-container"> 
                    <div className="limiteCredito-titulo">
                            <span>Limite de Credito</span>
                    </div>
                    <div className="limiteCredito-valores">
                        <div className="limiteCredito-valores-grid-container">
                            <div className="limiteCredito-valores-all limiteCredito-valores-concedido">
                                <span>R$ {credito.concedido}</span>
                            </div>
                            <div className="limiteCredito-valores-description limiteCredito-valores-concedido-description">
                                <span>Concedido</span>
                            </div>
                            <div className="limiteCredito-valores-all limiteCredito-valores-disponivel">
                                <span>R$ {credito.disponivel}</span>
                            </div>
                            <div className="limiteCredito-valores-description limiteCredito-valores-disponivel-description">
                                <span>Disponivel</span>
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

export default LimiteCredito;