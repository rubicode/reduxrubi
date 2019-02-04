import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions'

class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      author: "",
      message: ""
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event){
    this.setState({author: event.target.value});
  }

  handleMessageChange(event){
    this.setState({message: event.target.value});
  }

  handleSubmit(event){
    if(this.state.author && this.state.message){
      this.props.postComment(this.state.author, this.state.message)
      this.setState({author: "", message: ""});
    }
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange} />
        <br />
        <textarea name="message" rows="8" cols="80" onChange={this.handleMessageChange} value={this.state.message}></textarea>
        <button type="submit">Kirim</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (author, message) => dispatch(postComment(author, message))
})

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
