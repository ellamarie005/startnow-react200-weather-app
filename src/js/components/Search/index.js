import { connect } from 'react-redux';
import SearchInput from './SearchInput';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    weather: store.search.weather,
    lineItems: store.search.lineItems
  };
}

export default connect(mapStoreToProps)(SearchInput);