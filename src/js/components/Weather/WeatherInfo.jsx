import React, { Component } from 'react';

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
  }

  //can have static default props and pass down the file thats in the data. so you wont have to trail
  // static defaultProps: {
  //   name: {
  //     main: {

  //     }
  //   }
  // }

  render() {
    const { name } = this.props;
    console.log(name)
    return (
      <div className='card text-center' >
        <h5 className='card-header alert alert-primary'>City Information</h5>
        <div className='card-body'>
          <h4>{name.name &&
            <img
              src={`http://openweathermap.org/img/w/${name.weather[0].icon}.png`}
              alt='Weather icon'
              className='weather-icon'
            />
          }
            {name.name}</h4>
       <h6>Lon/Lat: </h6><p className='text-primary'>{name.coord && name.coord.lon} {name.coord && name.coord.lat}</p>
          <hr className='bg-light' />
          <div className='row'>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Temperature(F)</h5>
                <p className='card-text text-primary'>{name.main && name.main.temp}</p>
              </div>
            </div>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Pressure</h5>
                <p className='card-text text-primary'>{name.main && name.main.pressure}</p>
              </div>
            </div>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Humidity</h5>
                <p className='card-text text-primary'>{name.main && name.main.humidity}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Lowest Temp(F)</h5>
                <p className='card-text text-primary'>{name.main && name.main.temp_min}</p>
              </div>
            </div>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Highest Temp(F)</h5>
                <p className='card-text text-primary'>{name.main && name.main.temp_max}</p>
              </div>
            </div>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Wind Speed</h5>
                <p className='card-text text-primary'>{name.wind && name.wind.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;