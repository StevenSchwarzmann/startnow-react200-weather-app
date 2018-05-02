import React from 'react';

export default class History extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div className="containerHistory">
                <header className='bg-primary'> Search History </header>
                <div>
                    <ul id='historyList'>
                    <div key={Date.now}>
              <p>{ this.props.history }</p>
              <p>{ this.props.history.date }</p>
              </div>
                    </ul>
                </div>
           </div>
        )
    }
}