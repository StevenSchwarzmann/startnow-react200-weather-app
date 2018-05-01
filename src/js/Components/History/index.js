import History from "./history";
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    history: store.city.history
  };
}

export default connect(mapStoreToProps)(History);
