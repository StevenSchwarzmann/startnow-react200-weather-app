import React from "react";
import Search from "./Components/Search/search";
import City from "./Components/City/city";
import History from "./Components/History/history";
import Title from "./title";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <Title />
          <Search />
        </div>
        <div className="row">
          <div className="col-6">
            <City />
          </div>
          <div className="col-6">
            <History />
          </div>
        </div>
      </div>
    );
  }
}
