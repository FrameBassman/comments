import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: ''}

  textarea_onChange = event => {
    this.setState({ comment: event.target.value});
  }

  form_onSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.form_onSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.textarea_onChange} value={this.state.comment}></textarea>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
