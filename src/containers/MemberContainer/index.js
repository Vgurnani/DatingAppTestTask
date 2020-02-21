import { connect } from "react-redux";
import { getMemberList } from "actions/Auth";
import Members from "components/Members";

const mapStateToProps = state => ({
  auth: state.auth,
  memberData: state.auth.memberList
});

const mapDispatchToProps = dispatch => ({
  getMemberList: () => dispatch(getMemberList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
