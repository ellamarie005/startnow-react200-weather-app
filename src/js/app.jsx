import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron mt-3'>
          <h1>Origin Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>
        <div className='row'>
          <form className='col-md-12 mb-3'>
            <div className='input-group'>
              <input type='city' className='form-control' placeholder='Enter City' />
              <div class="input-group-append">
                <button className='btn btn-outline-secondary' type='button'>Go!</button>
              </div>
            </div>
          </form>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <h5 className='card-header'>City Information</h5>
              <div className='card-body'>
                <h3>Tokyo</h3>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='card'>
              <h5 className='card-header'>Search History</h5>
              <div className='card-body'>
                <ul>
                  <li>cityyy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
