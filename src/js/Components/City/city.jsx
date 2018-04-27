import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="containerCity">
            <header className='bg-primary'>
                City Information
            </header>
            <div className='cityName'>
                <strong> City Name </strong>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <strong> Temperature (F) </strong>
                </div>
                <div className='col-4'>
                <strong>  Pressure </strong>
                </div>
                <div className='col-4'>
                <strong> Humidity </strong>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                <strong> Lowest Temp(F) </strong>
                </div>
                <div className='col-4'>
                <strong> Highest Temp(F) </strong>
                </div>
                <div className='col-4'>
                <strong> Wind Speed </strong>
                </div>
            </div>
            </div>
        )
    }
}