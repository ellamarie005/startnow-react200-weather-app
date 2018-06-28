import {connect} from 'react-redux';
import History from './HistoryData';

function mapStoreToProps(store) {
  return {
    searchItems: store.search.lineItems,
  };
}

export default connect (mapStoreToProps)(History);