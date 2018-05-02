import React from "react";
import { updateSearch, updateHistory, addCity, apiSearch } from "./searchActions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CityInput: ""
    };

    this.handleClickNavBtn = this.handleClickNavBtn.bind(this);
    this.handleUpdateWeather = this.handleUpdateWeather.bind(this);
    this.updateCity = this.updateCity.bind(this);
  }

  updateCity(e) {
    const { dispatch } = this.props;
    dispatch(updateSearch(e.target.value));
  }

  handleClickNavBtn(e) {
    const { dispatch, search } = this.props;
    dispatch(apiSearch(search));
    e.target.classList.contains("btn")
      ? this.handleUpdateWeather(e, "btn")
      : "";
  }

  handleUpdateWeather(e, btn) {
    e.preventDefault();
    const { city, dispatch } = this.props;
    btn ? dispatch(updateHistory(e.target.value)) : dispatch(updateHistory(city));
    btn ? dispatch(apiSearch(e.target.value)) : dispatch(apiSearch(city));
  }

  render() {
    return (
      <div className="containerSearch">
        <ul className="nav nav-tabs" onClick={this.handleClickNavBtn}>
          <li>
            <button name="city" className="btn btn-primary" value="San Diego">
              San Diego
            </button>
          </li>
          <li>
            <button name="city" className="btn btn-primary" value="New York">
              New York
            </button>
          </li>
          <li>
            <button
              name="city"
              className="btn btn-primary"
              value="District of Columbia"
            >
              Washington D.C.
            </button>
          </li>
          <li>
            <button name="city" className="btn btn-primary" value="London">
              London
            </button>
          </li>
          <li>
            <button name="city" className="btn btn-primary" value="Tokyo">
              Tokyo
            </button>
          </li>
        </ul>
        <input
          type="text"
          className="form-control"
          placeholder="Search City"
          aria-label="Search City"
          onChange={this.updateCity}
        />
        <button className="btn-submit" onClick={this.handleClickNavBtn}>
          Go!
        </button>
      </div>
    );
  }
}
