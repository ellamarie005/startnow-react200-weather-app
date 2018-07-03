import { connect } from 'react-redux';
import SearchInput from './SearchInput';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    name: store.search.name,
    lineItems: store.search.lineItems,
    date: store.search.date
  };
}

export default connect(mapStoreToProps)(SearchInput);