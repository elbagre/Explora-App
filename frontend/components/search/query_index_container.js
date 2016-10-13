import { connect } from 'react-redux';
import { fetchSingleQuestion } from '../../actions/question_actions.js';
import { fetchSingleTopic } from '../../actions/topic_actions.js';
// import { fetchSingleUser } from '../../actions/user_actions.js';
import QueryIndex from './query_index.jsx';

const mapStateToProps = (state) => ({
  queries: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleQuestion: (id) => dispatch(fetchSingleQuestion(id)),
  fetchSingleTopic: (id) => dispatch(fetchSingleTopic(id)),
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryIndex);
