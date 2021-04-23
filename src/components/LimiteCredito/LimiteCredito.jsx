import React, { Component } from "react";
import "./limiteCredito.css";

class LimiteCredito extends Component {

    render() {    
        return (
            <div className="limiteCredito">                
                <div className="limiteCredito-grid-container"> 
                    <div className="limiteCredito-titulo">
                            <span>Limite de Credito</span>
                    </div>
                    <div className="limiteCredito-valores">
                        <div className="limiteCredito-valores-grid-container">
                            <div className="limiteCredito-valores-all limiteCredito-valores-concedido">
                                <span>R$ {this.props.json.credito.concedido}</span>
                            </div>
                            <div className="limiteCredito-valores-description limiteCredito-valores-concedido-description">
                                <span>Concedido</span>
                            </div>
                            <div className="limiteCredito-valores-all limiteCredito-valores-disponivel">
                                <span>R$ {this.props.json.credito.disponivel}</span>
                            </div>
                            <div className="limiteCredito-valores-description limiteCredito-valores-disponivel-description">
                                <span>Disponivel</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  
        );
    }
}

export default LimiteCredito;