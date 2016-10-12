import { connect } from 'react-redux';
import { requestSingleQuestion } from '../../actions/question_actions.js';
import { requestSingleTopic } from '../../actions/topic_actions.js';
import TopicHome from './topic_home.jsx';

const mapStateToProps = (state, ownProps) => ({
  id: parseInt(ownProps.params.id),
  topic: state.topics.detail
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleQuestion: (id) => dispatch(requestSingleQuestion(id)),
  requestSingleTopic: (id) => dispatch(requestSingleTopic(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicHome);
