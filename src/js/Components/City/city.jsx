import React, { Component } from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {city, weather} = this.props;
        const convertToF = f => {
            return ( f * ( 9 / 5 ) - 459.67 ).toFixed(2)
        }
        return(
            

            <div className="containerCity">
            <header className='bg-primary'>
                City Information
            </header>
            <br></br>
            <div className='cityOutput'>
                {(this.props.city.name ? <h2>{this.props.city.name}</h2> : <h2> City Name </h2>)}
            </div>
            <div className='row'>
                <div className='col-4'>
                    <strong> Temperature (F) </strong>
                        <div id='tempOutput'>{(this.props.city.main.temp ? convertToF(this.props.city.main.temp) + ' °F' : 0 )}</div>
                </div>
                <div className='col-4'>
                <strong>  Pressure </strong>
                    <div id='pressureOutput'>{(this.props.city.main.pressure ? this.props.city.main.pressure + ' PSI' : 0 )}</div>
                </div>
                <div className='col-4'>
                <strong> Humidity </strong>
                    <div id='humidityOutput'>{(this.props.city.main.humidity ? this.props.city.main.humidity + ' %' : 0 )}</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                <strong> Lowest Temp(F) </strong>
                    <div id='lowTempOutput'>{(this.props.city.main.temp ? convertToF(this.props.city.main.temp_min) + ' °F' : 0 )}</div>
                </div>
                <div className='col-4'>
                <strong> Highest Temp(F) </strong>
                    <div id='highTempOutput'>{(this.props.city.main.temp ? convertToF(this.props.city.main.temp_max) + ' °F': 0 )}</div>
                </div>
                <div className='col-4'>
                <strong> Wind Speed </strong>
                    <div id='windSpeedOutput'>{((this.props.city.wind && this.props.city.wind.speed) ? (this.props.city.wind.speed) + ' mph' : 0 )}</div>
                </div>
            </div>
            </div>
        )
    }
}