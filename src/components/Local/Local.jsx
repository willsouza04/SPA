import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import "./local.css";

const Local = ({url}) => {
    
    const [listalocal, setLocal] = useState([])      
    useEffect(() => { 
        busca(url, setLocal)
    }, [])

    if (listalocal.length){
        const local = listalocal[0];
        return (            
            <div className="local">
                <div className="local-grid-container"> 
                    <div className="local-titulo">
                        <span>Local</span>
                    </div>
                    <div className="local-map">
                        <img 
                            src={`https://maps.googleapis.com/maps/api/staticmap?center=${local.localizacao[0]},${local.localizacao[1]}&zoom=16&size=270x180&sensor=false&markers=color:red%7C${local.localizacao[0]},${local.localizacao[1]}&key=${local.api_key}`} 
                            alt=''
                        />
                    </div>
                    <div className="local-endereco">
                        <div className="local-endereco-grid-container">
                            <div className="local-endereco-icon">
                                <span><i className="fa fa-map-marker"></i></span>
                            </div>
                            <div className="local-valores-all local-endereco-endereco">
                                <span>{local.endereco}</span>
                            </div>
                            <div className="local-valores-value local-endereco-tipo">
                                <span>{local.tipo}</span>
                            </div>
                        </div>
                    </div>
                </div>  
                
            </div>     
        );
    };

    return (<div></div>);
}

export default Local;