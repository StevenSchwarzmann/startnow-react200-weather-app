import React from "react";
import { updateSearch, addHistory } from "./searchActions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CityInput: ""
    };

    this.handleClickNavBtn = this.handleClickNavBtn.bind(this);
  }

  handleClickNavBtn(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    if (e.target === "city") {
      this.setState = { CityInput: value };
      dispatch(addHistory(value));
      dispatch(updateSearch(value));
      return;
    } 
    dispatch(updateSearch(this.state.CityInput));
    dispatch(addHistory(this.state.CityInput));
  }

  render() {
    return (
      <div className="containerSearch">
        <ul className="nav nav-tabs" onClick={this.handleClickNavBtn}>
          <li>
            <button className="btn btn-primary" value="San Diego">
              San Diego
            </button>
          </li>
          <li>
            <button className="btn btn-primary" value="New York">
              New York
            </button>
          </li>
          <li>
            <button className="btn btn-primary" value="District of Columbia">
              Washington D.C.
            </button>
          </li>
          <li>
            <button className="btn btn-primary" value="London">
              London
            </button>
          </li>
          <li>
            <button className="btn btn-primary" value="Tokyo">
              Tokyo
            </button>
          </li>
        </ul>
        <input
          type="text"
          className="form-control"
          placeholder="Search City"
          aria-label="Search City"
        />
        <button className="btn-submit">Go!</button>
      </div>
    );
  }
}
