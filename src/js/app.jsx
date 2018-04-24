import React from "react";
import Search from "./Components/Search/search";
import City from "./Components/City/city";
import History from "./Components/History/history";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <Search />
        </div>
        <div className="col-6">
          <History />
        </div>
        <div className="col-6">
          <City />
        </div>
      </div>
    );
  }
}
