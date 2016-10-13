import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import Header from './header.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  queries: state.query
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
