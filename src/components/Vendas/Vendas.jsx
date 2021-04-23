import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import "./vendas.css";

class Vendas extends Component {    

    render() {    
        return (
            <div className="Vendas">                
                <div className="Vendas-grid-container"> 
                    <div className="Vendas-titulo">
                        <span>Vendas</span>
                    </div>
                    <Bar
                        data = {{
                            labels: this.props.json.vendas.meses,
                            datasets: [{
                                label: "Vendas",
                                data:  this.props.json.vendas.quantidade,
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
    }
}

export default Vendas;