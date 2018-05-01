import City from './city';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        city: store.city.city
    }
}
export default connect(mapStoreToProps)(City);