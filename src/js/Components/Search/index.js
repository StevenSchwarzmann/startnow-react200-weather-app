import Search from "./search";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    city: store.city.city,
    history: store.city.history
  };
}
export default connect(mapStoreToProps)(Search);
