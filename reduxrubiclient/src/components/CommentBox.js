import React, { Component } from 'react';
import CommentList from '../containers/CommentList';
import CommentForm from '../containers/CommentForm';

export default class CommentBox extends Component {
  render(){
    return(
      <div style={{padding: "4px", margin: "4px", border: "2px solid grey"}}>
      <h1>Komentar RUBICAMP</h1>
      <CommentList />
      <CommentForm />
      </div>
    )
  }
}
