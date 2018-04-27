import React from "react";
import { updateSearch, updateText } from "./searchActions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="containerSearch">
        <ul className="nav nav-tabs">
          <li>
            <button className="btn btn-primary">San Diego</button>
          </li>
          <li>
            <button className="btn btn-primary">New York</button>
          </li>
          <li>
            <button className="btn btn-primary">Washington D.C.</button>
          </li>
          <li>
            <button className="btn btn-primary">London</button>
          </li>
          <li>
            <button className="btn btn-primary">Tokyo</button>
          </li>
        </ul>
        <input
          type="text"
          className="form-control"
          placeholder="Search City"
          aria-label="Search City"
        />
        <button className='btn-submit'>
          Go!
        </button>
      </div>
    );
  }
}
