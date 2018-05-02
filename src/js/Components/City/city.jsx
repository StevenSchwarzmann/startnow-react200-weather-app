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
            <div className='cityName'>
                <strong> City Name </strong>
                    <div></div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <strong> Temperature (F) </strong>
                        <div id='tempOutput'>{convertToF(this.props.city.main.temp)}</div>
                </div>
                <div className='col-4'>
                <strong>  Pressure </strong>
                    <div id='pressureOutput'>{this.props.city.main.pressure}</div>
                </div>
                <div className='col-4'>
                <strong> Humidity </strong>
                    <div id='humidityOutput'>{this.props.city.main.humidity}</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                <strong> Lowest Temp(F) </strong>
                    <div id='lowTempOutput'>{convertToF(this.props.city.main.temp_min)}</div>
                </div>
                <div className='col-4'>
                <strong> Highest Temp(F) </strong>
                    <div id='highTempOutput'>{convertToF(this.props.city.main.temp_max)}</div>
                </div>
                <div className='col-4'>
                <strong> Wind Speed </strong>
                    <div id='windSpeedOutput'>{this.props.city.wind && this.props.city.wind.speed}</div>
                </div>
            </div>
            </div>
        )
    }
}