import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { busca } from '../../services/api'
import { Bar } from 'react-chartjs-2';
import "./vendas.css";

const Container = styled.div`
    background-color: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(${({theme}) => theme.shadow}, 0.16), 0 2px 10px 0 rgba(${({theme}) => theme.shadow}, 0.12);    
    flex-grow: 1;
`

const Vendas = ({url}) =>  {    

    const [listavendas, setVendas] = useState([])    
    useEffect(() => { 
        busca(url, setVendas)
    }, [])

    if (listavendas.length) {        
        const vendas = listavendas[0];
        return (
            <div className="Vendas">  
                <Container>           
                    <div className="Vendas-grid-container"> 
                        <div className="Vendas-titulo">
                            <span>Vendas</span>
                        </div>
                        <Bar
                            data = {{
                                labels: vendas.meses,
                                datasets: [{
                                    label: "Vendas",
                                    data:  vendas.quantidade,
                                    backgroundColor: [
                                        'rgba(31,100,190)'
                                    ]
                                }]
                            }}
                            
                        >
                        </Bar>
                    </div>  
                </Container>   
            </div>  
        );
    };

    return (<div></div>);
}

export default Vendas;