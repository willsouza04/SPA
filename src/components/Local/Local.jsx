import React, { Component } from "react";
import "./local.css";

class Local extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }
    
    render() {
        return (            
            <div>
                <button onClick={this.getLocation}>Get coordinates</button>
                <p>Latitude:{this.state.latitude}</p>
                <p>Longitude:{this.state.longitude}</p>
                {
                    this.state.latitude && this.state.longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyBqcvUh_AYttIX3YKAmn7qSRRWQdhPb5vQ`} alt=''/>
                    : null
                }
            </div>     
        );
    }
}

export default Local;