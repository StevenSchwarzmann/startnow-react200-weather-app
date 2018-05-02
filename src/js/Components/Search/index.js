import Search from "./search";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    city: store.city.city,
    history: store.city.history,
    search: store.city.search
  };
}
export default connect(mapStoreToProps)(Search);
