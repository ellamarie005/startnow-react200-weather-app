import {connect} from 'react-redux';
import History from './HistoryData';

function mapStoreToProps(store) {
  return {
    name: store.search.name,
    lineItems: store.search.lineItems
  };
}

export default connect (mapStoreToProps)(History);