import { connect } from 'react-redux';
import { login } from "../../../actions/session_actions.js";
import GuestButton from './guest_button.jsx';

const mapStateToProps = (state) => ({
  user: {
    email: "guest@guest.com",
    password: "guests"
  }
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestButton);
