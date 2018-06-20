import {connect} from 'react-redux';
import WeatherInfo from './WeatherInfo';

function mapStoreToProps(store) {
  return {
    searchItems: store.search,
  };
}

export default connect(mapStoreToProps)(WeatherInfo);