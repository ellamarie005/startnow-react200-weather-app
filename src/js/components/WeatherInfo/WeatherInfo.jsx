import React from 'react';

class WeatherInfo extends React.Component {
  render() {
    const {searchItems} = this.props;

    return (
      <div className='card text-center' >
        <h5 className='card-header alert alert-primary'>City Information</h5>
        <div className='card-body'>
          <h3>{searchItems.name}</h3>
          <hr className='bg-light'/>
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Temperature(F)</div>
              <div>{searchItems.humidity}</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Pressure</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Humidity</div>
            </div>
          </div>
          <div className='row'>
            <div className='card col-sm-4'>
              <div className='card-body'>Lowest Temperature(F)</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Highest Temperature(F)</div>
            </div>
            <div className='card col-sm-4'>
              <div className='card-body'>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;