import React, { Component } from 'react';
import Comment from './CommentActive';
import { connect } from 'react-redux';
import { loadComment } from '../actions'

class CommentList extends Component {

  componentDidMount(){
    this.props.loadComment();
  }

  render(){
    const nodes = this.props.comments.map((item, index)=>{
      return (
        <Comment
        key={index}
        author={item.author}
        message={item.message}
        sent={item.sent}
        id={item.id} />)
      })
      return(
        <ul>
        {nodes}
        </ul>
      )
    }
  }

  const mapStateToProps = (state) => ({
    comments: state.comments
  })

  const mapDispatchToProps = (dispatch) => ({
    loadComment: () => dispatch(loadComment())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentList)
