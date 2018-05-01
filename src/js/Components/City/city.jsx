import React, { Component } from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {city, weather} = this.props;
        
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
                        <div id='tempOutput'>Temp</div>
                </div>
                <div className='col-4'>
                <strong>  Pressure </strong>
                    <div id='pressureOutput'>Press</div>
                </div>
                <div className='col-4'>
                <strong> Humidity </strong>
                    {/* <div id='humidityOutput'>{weather.main.humidity}</div> */}
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                <strong> Lowest Temp(F) </strong>
                    <div id='lowTempOutput'>Low</div>
                </div>
                <div className='col-4'>
                <strong> Highest Temp(F) </strong>
                    <div id='highTempOutput'>High</div>
                </div>
                <div className='col-4'>
                <strong> Wind Speed </strong>
                    <div id='windSpeedOutput'>Wind</div>
                </div>
            </div>
            </div>
        )
    }
}