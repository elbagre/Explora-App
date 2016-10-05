import React  from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="queston-item">
        <h3>this.title</h3>
        <p>this.description</p>
      </div>
    );
  }
}

export default QuestionIndexItem;
