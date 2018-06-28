import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';

function mapStoreToProps(store) {
  return {
    // searchItems: store.search,
    city: store.search.city,
    weather: store.search.weather
  };
}

export default connect(mapStoreToProps)(WeatherInfo);