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
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                    </ul>
                </div>
           </div>
        )
    }
}