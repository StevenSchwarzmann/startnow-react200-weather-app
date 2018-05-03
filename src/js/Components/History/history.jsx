import React from "react";

export default class History extends React.Component {
  constructor(props) {
    super(props);
}
render() {
    return (
      <div className="containerHistory">
        <header className="bg-primary"> Search History </header>
        <div>
          <ul id="historyList">
            {this.props.history.map((history, i) => {
                //add onClick within <li>
              return <card className='card'><li onClick={}>{history.city + '  ' + history.date}</li></card>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
