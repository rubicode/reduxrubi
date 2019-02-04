import React, { Component } from 'react';
import Comment from './CommentActive';
import { connect } from 'react-redux';
import { loadComment } from '../actions';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class CommentList extends Component {

  componentDidMount(){
    this.props.loadComment();
  }

  render(){
    return(
      <View style={styles.container}>
      <FlatList
      data={this.props.comments}
      renderItem={({item}) => <Comment
      key={item.id}
      author={item.author}
      message={item.message}
      sent={item.sent}
      id={item.id} />}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
})

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
