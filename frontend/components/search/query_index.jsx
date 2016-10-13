import React from 'react';
import { Link } from 'react-router';

class QueryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleQueries = this.handleQueries.bind(this);
  }

  handleQueries() {
    if (this.props.queries[0].name) {
      return(
        this.props.queries.map( (query, idx) => (
          <li>
            <Link to={`/topic/${query.id}`}>
              Topic: {query.name}
            </Link>
          </li>
        ))
      );
    }
  }

  render() {
    if (!this.props.queries.length) {
      return (
        <div></div>
      );
    }
    return(
      <ul className="search-list">
        {this.handleQueries()}
      </ul>
    );
  }
}

export default QueryIndex;
