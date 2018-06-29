import React, { Component } from 'react';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className='card text-center' >
        <h5 className='card-header alert alert-primary'>City Information</h5>
        <div className='card-body'>
          <h3>{name.name}</h3>
          <p>Lon/Lat: {name.coord && name.coord.lon}, {name.coord && name.coord.lat}</p>
          <hr className='bg-light' />
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Temperature(F)</div>
              <div>{name.main && name.main.temp}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Pressure</div>
              <div>{name.main && name.main.pressure}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Humidity</div>
              <div>{name.main && name.main.humidity}</div>
            </div>
          </div>
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Lowest Temperature(F)</div>
              <div>{name.main && name.main.temp_min}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Highest Temperature(F)</div>
              <div>{name.main && name.main.temp_max}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Wind Speed</div>
              <div>{name.wind && name.wind.speed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;