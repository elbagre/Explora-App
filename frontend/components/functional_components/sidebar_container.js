import SideBar from './sidebar.jsx';
import { connect } from 'react-redux';
import { requestAllTopics, requestSingleTopic } from '../../actions/topic_actions.js';

const mapStateToProps = (state) => ({
  topics: state.topics.items,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestAllTopics: () => dispatch(requestAllTopics()),
  requestSingleTopic: (id) => dispatch(requestSingleTopic(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
