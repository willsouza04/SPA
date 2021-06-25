import React, { useState, useEffect } from "react";
import { busca } from '../../services/api'
import "./atividades.css";

let total = 0;        
let atraso = 0;   
let andamento = 0;   
let previstas = 0;   
let concluidas = 0; 

const Atividades = ({url}) => {  

    const [listaatividades, setAtividades] = useState([])    
    useEffect(() => { 
        busca(url, setAtividades)
    }, [])

    if (listaatividades.length) {  
        
        const atividades = listaatividades;
        contabilizarGrupos(atividades);

        return (
            <div className="atividades">                
                <div className="atividades-grid-container"> 
                    <div className="atividades-titulo">
                        <span>Atividades</span>
                    </div>
                    <div className="atividades-agrupamentos">
                        <div className="atividades-agrupamentos-grid-container">
                            <div className="App-valores-count atividades-agrupamentos-total-count">
                                <span>{total}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-total">
                                <span>Total</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-atraso-count">
                                <span>{atraso}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-atraso">
                                <span>Em atraso</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-andamento-count">
                                <span>{andamento}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-andamento">
                                <span>Em andamento</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-previstas-count">
                                <span>{previstas}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-previstas">
                                <span>Previstas</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-concluidas-count">
                                <span>{concluidas}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-concluidas">
                                <span>Concluídas</span>
                            </div>
                        </div>
                    </div>
                    <div className="atividades-valores">
                        {retornaAtividades(atividades, "Em atraso", "atividades-valores-atraso", "Atividades em atraso")}
                        {retornaAtividades(atividades, "Em andamento", "atividades-valores-andamento", "Atividades em andamento")}
                        {retornaAtividades(atividades, "Prevista", "atividades-valores-previstas", "Atividades Previstas")}
                        {retornaAtividades(atividades, "Concluída", "atividades-valores-concluidas", "Atividades Concluídas")}
                    </div>    
                </div>  
            </div>  
        );
    };

    return (<div></div>);
}

// Como neste Json de exemplo os dados não vieram prontos, foi necessario calcular cada situação.
function contabilizarGrupos(atividades) {

    total = atividades.length;       
    atraso = 0;   
    andamento = 0;   
    previstas = 0;   
    concluidas = 0; 

    atividades.forEach(element => {
        switch (element.situacao) {
            case "Em atraso":
                atraso = atraso + 1;
                break;
            case "Em andamento":
                andamento = andamento + 1;
                break;
            case "Prevista":
                previstas = previstas + 1;
                break;
            case "Concluída":
                concluidas = concluidas + 1;
                break;
            default:
                break;
        }
    });
}

// Este metodo Retorna o icone apartir do tipo da atividade.
function retornaIcone (tipo) {
    switch(tipo) {
        case "Ligação":
            return (<i className="fa fa-phone"></i>);
        case "Reunião":
            return (<i className="fa fa-group"></i>);
        case "Email":
            return (<i className="fa fa-envelope"></i>);
        case "Agenda":
            return (<i className="fa fa-calendar"></i>);
        default:
            return null;
    }
}

// Como há quatro situações, este metodo gera o xml especifico de cada uma, para não haver repetição de codigo
function retornaAtividades (atividades, situacao, classe, descricao) {
    return (
        <div className={classe}>
            <div className="atividades-valores-all-grid-container">
                <div className="atividades-valores-all-icon">
                <   span><i className="fa fa-circle"></i></span>
                </div>
                <div className="atividades-valores-all-description">
                    <span>{descricao}</span>
                </div>
            </div>   
            {atividades.map((atividade, index) => {
                
                if (atividade.situacao === situacao) {
                    return (  
                        <div className="atividades-valores-grid-container" key={index}>
                            <div className="atividades-valores-icon">
                                <span>{retornaIcone(atividade.tipo)}</span>
                            </div>
                            <div className="atividades-valores-all atividades-valores-descricao">
                                <span>{atividades[index].descricao}</span>
                            </div>
                            <div className="atividades-valores-value atividades-valores-contato">
                                <span>{atividades[index].contato}</span>
                            </div>
                            <div className="atividades-valores-value atividades-valores-data">
                                <span>{atividades[index].data}</span>
                            </div>
                        </div>   
                    );
                }
                else {
                    return null;
                }
            })}
        </div>
    )
}

export default Atividades;