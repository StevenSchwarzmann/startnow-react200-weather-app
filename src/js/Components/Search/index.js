import Search from './search';
import { connect } from 'react-redux';

    function mapStoreToProps(store) {
        return {
            city: store.search.city,
            history: store.search.history
        }
    }
export default connect(mapStoreToProps)(Search);