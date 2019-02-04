import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from '../actions';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';

class CommentForm extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      author: "",
      message: ""
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(value){
    this.setState({author: value});
  }

  handleMessageChange(value){
    this.setState({message: value});
  }

  handleSubmit(){
    if(this.state.author && this.state.message){
      this.props.postComment(this.state.author, this.state.message)
      this.setState({author: "", message: ""});
    }
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <View  style={{padding: 10, flex: 1}}>
      <Button
      title="Go back"
      onPress={() => this.props.navigation.goBack()}
      />
      <TextInput style={{height: 40}} placeholder="Masukkan penulis" onChangeText={this.handleAuthorChange} />
      <TextInput style={{height: 80}} placeholder="Masukkan pesannya" onChangeText={this.handleMessageChange} />
      <Button onPress={this.handleSubmit} title="Kirim" />
      </View>
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
