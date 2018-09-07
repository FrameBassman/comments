import React, {Component} from 'react';
import { connect } from 'react-redux';

export class CommentList extends Component {
  renderComments() {
    let key;
    return this.props.comments.map((comment, index) => {
      key = `${comment}_${index}`
      return <li key={key}>{comment}</li>
    })
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
  }
}

export default connect(mapStateToProps)(CommentList);
