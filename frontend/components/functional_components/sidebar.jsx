import React from 'react';
import { Link } from 'react-router';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.topicLinks = this.topicLinks.bind(this);
  }
  componentDidMount() {
    this.props.requestAllTopics();
  }

  topicLinks() {
    const continents = ["Africa", "Asia", "America", "Europe", "Australia"];
    if (this.props.topics.length !== 0) {
      return( this.props.topics.filter( (topic) => (
        continents.includes(topic.name)
      )).map( (topic, idx) => (
          <li key={idx}><Link to={`/topic/${topic.id}`}>{topic.name}</Link>
          </li>
        ))
      );
    }
  }

  render() {
    return (
      <aside className="sidebar">
        <nav className="feeds">
          <h3>Feeds</h3>
          <p>Edit</p>
          <ul>
            {this.topicLinks()}
          </ul>
        </nav>
        <nav className="trending">
          <h3>Trending Now</h3>
          <ul>
            <li>Is it dangerous to travel to Syria?</li>
            <li>I got robbed while backpacking through Bolivia</li>
            <li>Is it illegal to buy bamba?</li>
            <li>What are some good vegetarian foods in Croatia?</li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideBar;
