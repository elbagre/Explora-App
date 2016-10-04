import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, signup } from "../../actions/session_actions.js";

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
