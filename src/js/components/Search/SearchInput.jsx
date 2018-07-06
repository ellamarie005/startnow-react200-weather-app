import React from 'react';

import {
  updateCityInfo,
  getWeather
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSearchName = this.handleSearchName.bind(this);
    this.handleCityTab = this.handleCityTab.bind(this);
  }

  // for when the input changes
  handleNameInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityInfo(value));
  }

  // for the button
  handleSearchName() {
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

  // for the tabs on top of the input
  handleCityTab(event) {
    // need to stop button from refreshing
    event.preventDefault();
    const { dispatch } = this.props;
    // the dataset part is something you can use to call the 'data-blah' value from your html tag.
    //in this case the location is set as data-value for the buttons on top of the input tag.
    const { value } = event.target.dataset;
    // calling the action and grabbing the value
    dispatch(getWeather(value));
  }

  render() {
    const { city } = this.props;
    return (
        <form className='col-md mb-3'>
            <div className='input-group'>
              <div className='input-group'>
                <div className='btn-group'>
                  <button className='btn btn-primary' data-value='San Diego' onClick={this.handleCityTab}>San Diego</button>
                  <button className='btn btn-primary' data-value='New York' onClick={this.handleCityTab}>New York</button>
                  <button className='btn btn-primary' data-value='District of Columbia' onClick={this.handleCityTab}>Washington D.C.</button>
                  <button className='btn btn-primary' data-value='London' onClick={this.handleCityTab}>London</button>
                  <button className='btn btn-primary' data-value='Tokyo' onClick={this.handleCityTab}>Tokyo</button>
                </div>
              </div>
              <input
                id='city'
                type='text'
                className='form-control'
                placeholder='Enter name'
                value={city}
                onChange={this.handleNameInput}
              />
              <div className="input-group-append">
                <button className='btn btn-light' type='button' onClick={this.handleSearchName}>Go!</button>
              </div>
            </div>
        </form>
    )
  }
}