import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import { busca } from '../../services/api'
import "./local.css";

const Container = styled.div`
    background-color: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(${({theme}) => theme.shadow}, 0.16), 0 2px 10px 0 rgba(${({theme}) => theme.shadow}, 0.12);    
    flex-grow: 1;
`

const Local = ({url, theme}) => {
    
    const [listalocal, setLocal] = useState([])      
    useEffect(() => { 
        busca(url, setLocal)
    }, [])

    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    if (listalocal.length){
        const local = listalocal[0];

        let map_largura = Math.trunc(size[0]>1262 ? size[0]/4 : size[0]>768 ? size[0]/2 : size[0]); 
        map_largura = Math.trunc((map_largura-60)*0.9);

        return (            
            <div className="local">
                <Container>
                    <div className="local-grid-container"> 
                        <div className="local-titulo">
                            <span>Local</span>
                        </div>
                        <div id="local-map" className="local-map">
                            <img 
                                src={`https://maps.googleapis.com/maps/api/staticmap?center=${local.localizacao[0]},${local.localizacao[1]}&zoom=16&size=${map_largura}x180&sensor=false&${theme.map_body}&${theme.map_road}&markers=color:red%7C${local.localizacao[0]},${local.localizacao[1]}&key=${local.api_key}`} 
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
                </Container>
            </div>     
        );
    };

    return (<div></div>);
}

export default Local;