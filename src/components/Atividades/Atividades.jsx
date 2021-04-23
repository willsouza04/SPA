import React, { Component } from "react";
import "./atividades.css";

class Atividades extends Component {

    constructor(props) {
        super(props);
        this.total = this.props.json.atividades.length;        
        this.atraso = 0;   
        this.andamento = 0;   
        this.previstas = 0;   
        this.concluidas = 0;  

        this.contabilizarGrupos();
    }

    // Como neste Json de exemplo os dados não vieram prontos, foi necessario calcular cada situação.
    contabilizarGrupos() {
        this.props.json.atividades.forEach(element => {
            switch (element.situacao) {
                case "Em atraso":
                    this.atraso = this.atraso + 1;
                    break;
                case "Em andamento":
                    this.andamento = this.andamento + 1;
                    break;
                case "Prevista":
                    this.previstas = this.previstas + 1;
                    break;
                case "Concluída":
                    this.concluidas = this.concluidas + 1;
                    break;
                default:
                    break;
            }
        });
    }

    // Como há quatro situações, este metodo gera o xml especifico de cada uma, para não haver repetição de codigo
    retornaAtividades(situacao, classe, descricao){
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
                {this.props.json.atividades.map((atividade, index) => {
                    
                    if (atividade.situacao === situacao) {
                        return (  
                            <div className="atividades-valores-grid-container" key={index}>
                                <div className="atividades-valores-icon">
                                    <span>{this.retornaIcone(atividade.tipo)}</span>
                                </div>
                                <div className="atividades-valores-all atividades-valores-descricao">
                                    <span>{this.props.json.atividades[index].descricao}</span>
                                </div>
                                <div className="atividades-valores-value atividades-valores-contato">
                                    <span>{this.props.json.atividades[index].contato}</span>
                                </div>
                                <div className="atividades-valores-value atividades-valores-data">
                                    <span>{this.props.json.atividades[index].data}</span>
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

    // Este metodo Retorna o icone apartir do tipo da atividade.
    retornaIcone(tipo){
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

    render() {    
        return (
            <div className="atividades">                
                <div className="atividades-grid-container"> 
                    <div className="atividades-titulo">
                        <span>Atividades</span>
                    </div>
                    <div className="atividades-agrupamentos">
                        <div className="atividades-agrupamentos-grid-container">
                            <div className="App-valores-count atividades-agrupamentos-total-count">
                                <span>{this.total}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-total">
                                <span>Total</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-atraso-count">
                                <span>{this.atraso}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-atraso">
                                <span>Em atraso</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-andamento-count">
                                <span>{this.andamento}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-andamento">
                                <span>Em andamento</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-previstas-count">
                                <span>{this.previstas}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-previstas">
                                <span>Previstas</span>
                            </div>
                            <div className="App-valores-count atividades-agrupamentos-concluidas-count">
                                <span>{this.concluidas}</span>
                            </div>
                            <div className="atividades-agrupamentos-all tividades-agrupamentos-concluidas">
                                <span>Concluídas</span>
                            </div>
                        </div>
                    </div>
                    <div className="atividades-valores">
                        {this.retornaAtividades("Em atraso", "atividades-valores-atraso", "Atividades em atraso")}
                        {this.retornaAtividades("Em andamento", "atividades-valores-andamento", "Atividades em andamento")}
                        {this.retornaAtividades("Prevista", "atividades-valores-previstas", "Atividades Previstas")}
                        {this.retornaAtividades("Concluída", "atividades-valores-concluidas", "Atividades Concluídas")}
                    </div>    
                </div>  
            </div>  
        );
    }
}

export default Atividades;