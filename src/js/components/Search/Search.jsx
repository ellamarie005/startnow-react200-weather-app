import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <input type='city' className='form-control' placeholder='Enter City' />
            <div className="input-group-append">
              <button className='btn btn-outline-secondary' type='button'>Go!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}