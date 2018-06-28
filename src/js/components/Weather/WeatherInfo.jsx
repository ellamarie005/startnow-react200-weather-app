import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    const {city , weather} = this.props;

    return (
      <div className='card text-center' >
        <h5 className='card-header alert alert-primary'>City Information</h5>
        <div className='card-body'>
          <h3>{weather}</h3>
          <p>{weather}, {weather}</p>
          <hr className='bg-light'/>
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Temperature(F)</div>
              <div>{}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Pressure</div>
              <div>{}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Humidity</div>
              <div>{}</div>
            </div>
          </div>
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Lowest Temperature(F)</div>
              <div>{}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Highest Temperature(F)</div>
              <div>{}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Wind Speed</div>
              <div>{}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;