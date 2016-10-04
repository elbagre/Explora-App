import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Greeting);
