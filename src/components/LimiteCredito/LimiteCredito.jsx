import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import "./limiteCredito.css";

const LimiteCredito = ({url}) =>  {

    const [listacredito, setCredito] = useState([])    
    useEffect(() => { 
        busca(url, setCredito)
    }, [])

    if (listacredito.length) {  
        const credito = listacredito[0];  
        return (
            <div className="limiteCredito">                
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
            </div>  
        );
    };

    return (<div></div>);
}

export default LimiteCredito;