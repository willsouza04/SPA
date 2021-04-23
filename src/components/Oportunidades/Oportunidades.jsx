import React, { Component } from "react";
import "./oportunidades.css";

class Oportunidades extends Component {

    render() {    
        return (
            <div className="oportunidades">                
                <div className="oportunidades-grid-container"> 
                    <div className="oportunidades-titulo">
                        <span>Oportunidades ({this.props.json.oportunidades.total})</span>
                    </div>
                    <div className="oportunidades-valores">
                        <div className="oportunidades-valores-grid-container">
                            <div className="App-valores-count oportunidades-valores-ganhas-count">
                                <span>{this.props.json.oportunidades.ganhas[0]}</span>
                            </div>
                            <div className="oportunidades-valores-all oportunidades-valores-ganhas">
                                <span>Ganhas</span>
                            </div>
                            <div className="oportunidades-valores-value oportunidades-valores-ganhas-valor">
                                <span>{this.props.json.oportunidades.ganhas[1]}</span>
                            </div>
                            <div className="App-valores-count oportunidades-valores-perdidas-count">
                                <span>{this.props.json.oportunidades.perdidas[0]}</span>
                            </div>
                            <div className="oportunidades-valores-all oportunidades-valores-perdidas">
                                <span>Perdidas</span>
                            </div>
                            <div className="oportunidades-valores-value oportunidades-valores-perdidas-valor">
                                <span>{this.props.json.oportunidades.perdidas[1]}</span>
                            </div>
                            <div className="App-valores-count oportunidades-valores-abertas-count">
                                <span>{this.props.json.oportunidades.abertas[0]}</span>
                            </div>
                            <div className="oportunidades-valores-all oportunidades-valores-abertas">
                                <span>Abertas</span>
                            </div>
                            <div className="oportunidades-valores-value oportunidades-valores-abertas-valor">
                                <span>{this.props.json.oportunidades.abertas[1]}</span>
                            </div>
                            <div className="App-valores-count oportunidades-valores-descartadas-count">
                                <span>{this.props.json.oportunidades.descartadas[0]}</span>
                            </div>
                            <div className="oportunidades-valores-all oportunidades-valores-descartadas">
                                <span>Descartadas</span>
                            </div>
                            <div className="oportunidades-valores-value oportunidades-valores-descartadas-valor">
                                <span>{this.props.json.oportunidades.descartadas[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="oportunidades-link">
                        <button className="oportunidades-link-button">VER TODAS OPORTUNIDADES</button>
                    </div>
                </div>    
            </div>  
        );
    }
}

export default Oportunidades;