import {connect} from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    name: store.search.name,
    lineItems: store.search.lineItems
  };
}

export default connect(mapStoreToProps)(Search);