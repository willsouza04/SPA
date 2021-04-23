import React, { Component } from "react";
import "./local.css";

class Local extends Component {

    constructor(props) {
        super(props);
        this.API_KEY="AIzaSyBqcvUh_AYttIX3YKAmn7qSRRWQdhPb5vQ";
    }
    
    render() {
        return (            
            <div className="local">
                <div className="local-grid-container"> 
                    <div className="local-titulo">
                        <span>Local</span>
                    </div>
                    <div className="local-map">
                        <img 
                            src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.json.local.localizacao[0]},${this.props.json.local.localizacao[1]}&zoom=16&size=270x180&sensor=false&markers=color:red%7C${this.props.json.local.localizacao[0]},${this.props.json.local.localizacao[1]}&key=${this.API_KEY}`} 
                            alt=''
                        />
                    </div>
                    <div className="local-endereco">
                        <div className="local-endereco-grid-container">
                            <div className="local-endereco-icon">
                                <span><i className="fa fa-map-marker"></i></span>
                            </div>
                            <div className="local-valores-all local-endereco-endereco">
                                <span>{this.props.json.local.endereco}</span>
                            </div>
                            <div className="local-valores-value local-endereco-tipo">
                                <span>{this.props.json.local.tipo}</span>
                            </div>
                        </div>
                    </div>
                </div>  
                
            </div>     
        );
    }
}

export default Local;