import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    // lineItems: store.search.lineItems
  };
}

export default connect(mapStoreToProps)(Search);