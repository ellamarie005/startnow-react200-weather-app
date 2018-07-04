import React from 'react';
import Search from './components/Search';
import WeatherInfo from './components/Weather';
import History from './components/History';


export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron mt-3'>
          <h1>Origin Weather Application</h1>
          <p>Always know when you won't need an umbrella, and need sunglasses instead!</p>
        </div>
        <div className='row'>
          <Search />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <WeatherInfo />
          </div>
          <div className='col-md'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
