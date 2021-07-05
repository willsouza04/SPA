import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { busca } from '../../services/api'
import "./oportunidades.css";

const Container = styled.div`
    background-color: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(${({theme}) => theme.shadow}, 0.16), 0 2px 10px 0 rgba(${({theme}) => theme.shadow}, 0.12);    
    flex-grow: 1;
`

const Button = styled.button`   
    font-size: 12px;
    background-color: ${({theme}) => theme.body};
    color:#4478e0;
    border: #ffffff;;
    border-radius: 3px;
    box-shadow: none;
    font-size: 12px;
`

const Oportunidades = ({url}) => {

    const [listaoportunidades, setCliente] = useState([])    
    useEffect(() => { 
        busca(url, setCliente)
    }, [])

    if (listaoportunidades.length){   
        const oportunidades = listaoportunidades[0];
        return (
            <div className="oportunidades"> 
                <Container>            
                    <div className="oportunidades-grid-container"> 
                        <div className="oportunidades-titulo">
                            <span>Oportunidades ({oportunidades.total})</span>
                        </div>
                        <div className="oportunidades-valores">
                            <div className="oportunidades-valores-grid-container">
                                <div className="App-valores-count oportunidades-valores-ganhas-count">
                                    <span>{oportunidades.ganhas[0]}</span>
                                </div>
                                <div className="oportunidades-valores-all oportunidades-valores-ganhas">
                                    <span>Ganhas</span>
                                </div>
                                <div className="oportunidades-valores-value oportunidades-valores-ganhas-valor">
                                    <span>{oportunidades.ganhas[1]}</span>
                                </div>
                                <div className="App-valores-count oportunidades-valores-perdidas-count">
                                    <span>{oportunidades.perdidas[0]}</span>
                                </div>
                                <div className="oportunidades-valores-all oportunidades-valores-perdidas">
                                    <span>Perdidas</span>
                                </div>
                                <div className="oportunidades-valores-value oportunidades-valores-perdidas-valor">
                                    <span>{oportunidades.perdidas[1]}</span>
                                </div>
                                <div className="App-valores-count oportunidades-valores-abertas-count">
                                    <span>{oportunidades.abertas[0]}</span>
                                </div>
                                <div className="oportunidades-valores-all oportunidades-valores-abertas">
                                    <span>Abertas</span>
                                </div>
                                <div className="oportunidades-valores-value oportunidades-valores-abertas-valor">
                                    <span>{oportunidades.abertas[1]}</span>
                                </div>
                                <div className="App-valores-count oportunidades-valores-descartadas-count">
                                    <span>{oportunidades.descartadas[0]}</span>
                                </div>
                                <div className="oportunidades-valores-all oportunidades-valores-descartadas">
                                    <span>Descartadas</span>
                                </div>
                                <div className="oportunidades-valores-value oportunidades-valores-descartadas-valor">
                                    <span>{oportunidades.descartadas[1]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="oportunidades-link">
                            <Button className="oportunidades-link-button">VER TODAS OPORTUNIDADES</Button>
                        </div>
                    </div>  
                </Container>     
            </div>  
        );
    };

    return (<div></div>);
}

export default Oportunidades;