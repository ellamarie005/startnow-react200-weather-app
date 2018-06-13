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
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <h5 className='card-header alert alert-primary'>City Information</h5>
              <div className='card-body'>
                <h3>Tokyo</h3>
                <br />
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='card'>Temperature(F)</div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card'>Pressure</div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card'>Humidity</div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='card'>Lowest Temperature(F)</div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card'>Highest Temperature(F)</div>
                  </div>
                  <div className='col-sm-4'>
                    <div className='card'>Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md'>
            <div className='card'>
              <h5 className='card-header alert alert-primary'>Search History</h5>
              <div className='card-body'>
                <ul>
                  <li>city</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
