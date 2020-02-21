import { connect } from "react-redux";
import { getMemberList } from "actions/Auth";
import Login from "components/Login";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getMemberList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
