import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import { Bar } from 'react-chartjs-2';
import "./vendas.css";

const Vendas = ({url}) =>  {    

    const [listavendas, setVendas] = useState([])    
    useEffect(() => { 
        busca(url, setVendas)
    }, [])

    if (listavendas.length) {        
        const vendas = listavendas[0];
        return (
            <div className="Vendas">                
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
            </div>  
        );
    };

    return (<div></div>);
}

export default Vendas;