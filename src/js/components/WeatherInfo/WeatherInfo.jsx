import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    return (
      <div className='card' >
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
    );
  }
}

export default WeatherInfo;