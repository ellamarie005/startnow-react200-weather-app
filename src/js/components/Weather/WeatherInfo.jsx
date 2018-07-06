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
          <h3>{name.name}</h3>
          <h4>Lon/Lat: <h6 className='text-primary'>{name.coord && name.coord.lon} {name.coord && name.coord.lat}</h6></h4>
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
                <h5 className='card-title'>Lowest Temperature(F)</h5>
                <p className='card-text text-primary'>{name.main && name.main.temp_min}</p>
              </div>
            </div>
            <div className='card col-sm-4 border-0'>
              <div className='card-body'>
                <h5 className='card-title'>Highest Temperature(F)</h5>
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