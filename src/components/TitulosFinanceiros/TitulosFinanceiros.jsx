import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import "./titulosFinanceiros.css";

const TitulosFinanceiros = ({url}) => {

    const [listatitulos, setTitulos] = useState([])    
    useEffect(() => { 
        busca(url, setTitulos)
    }, [])

    if (listatitulos.length) {    
        const titulos = listatitulos[0];
        return (
            <div className="titulosFinanceiros">                
                <div className="titulosFinanceiros-grid-container"> 
                    <div className="titulosFinanceiros-titulo">
                            <span>Titulos Financeiros</span>
                    </div>
                    <div className="titulosFinanceiros-valores">
                        <div className="titulosFinanceiros-valores-grid-container">
                            <div className="App-valores-count titulosFinanceiros-valores-vencidos-count">
                                <span>{titulos.vencidos[1]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-all titulosFinanceiros-valores-ganhas">
                            <span>R$ {titulos.vencidos[0]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-description titulosFinanceiros-valores-ganhas-description">
                                <span>Vencidos</span>
                            </div>
                            <div className="App-valores-count titulosFinanceiros-valores-avencer-count">
                                <span>{titulos.a_vencer[1]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-all titulosFinanceiros-avencer-ganhas">
                            <span>R$ {titulos.a_vencer[0]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-description titulosFinanceiros-valores-avencer-description">
                                <span>A vencer</span>
                            </div>
                            <div className="App-valores-count titulosFinanceiros-valores-pagos-count">
                                <span>{titulos.pagos[1]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-all titulosFinanceiros-pagos-ganhas">
                            <span>R$ {titulos.pagos[0]}</span>
                            </div>
                            <div className="titulosFinanceiros-valores-description titulosFinanceiros-valores-pagos-description">
                                <span>Pagos</span>
                            </div>
                        </div>  
                    </div>
                </div>  
            </div>  
        );
    };

    return (<div></div>);
}

export default TitulosFinanceiros;