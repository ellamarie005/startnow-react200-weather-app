import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';

function mapStoreToProps(store) {
  return {
    // searchItems: store.search,
    name: store.search.name,
  };
}

export default connect(mapStoreToProps)(WeatherInfo);