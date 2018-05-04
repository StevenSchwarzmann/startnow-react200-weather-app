import React from "react";
import { apiSearch } from '../Search/searchActions'

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.handleRecall = this.handleRecall.bind(this);
}

handleRecall(e) {
  const { dispatch } = this.props;
  dispatch(apiSearch(e.target.dataset.name));
  dispatch(updateHistory(e.target.dataset.name))
  console.log('recalling')
}

render() {
    return (
      <div className="containerHistory">
        <header className="bg-primary"> Search History </header>
        <div>
          <ul id="historyList">
            {this.props.history.map((history, i) => {
                //add onClick within <li>
              return <li key={i} onClick={this.handleRecall} data-name={history.city} className='card'>{history.city + ' -  ' + history.date}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
