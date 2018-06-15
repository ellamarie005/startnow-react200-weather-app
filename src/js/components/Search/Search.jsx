import React from 'react';

import {
  updateNameInfo,
  addName,
  getWeather
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleAddName = this.handleAddName.bind(this);
  }

  handleNameInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(updateNameInfo(value));
  }
  handleAddName() {
    const { name, dispatch } = this.props;
    dispatch(getWeather(name));
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <form className='col-md-12 mb-3'>
          <div className='input-group'>
            <div className='input-group'>
              <div className='btn-group'>
                <button className='btn btn-primary'>San Diego</button>
                <button className='btn btn-primary'>New York</button>
                <button className='btn btn-primary'>Washington D.C.</button>
                <button className='btn btn-primary'>London</button>
                <button className='btn btn-primary'>Tokyo</button>
              </div>
            </div>
            <input
              id='name'
              type='text'
              className='form-control'
              placeholder='Enter name'
              value={name}
              onChange={this.handleNameInput}
            />
            <div className="input-group-append">
              <button className='btn btn-outline-secondary' type='button' onClick={this.handleAddName}>Go!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}