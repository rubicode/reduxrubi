import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CommentList from '../containers/CommentList';

export default class CommentBox extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    return(
      <View style={styles.commentBox}>
      <Text style={styles.headerBox}>Komentar RUBICAMP</Text>
      <CommentList />
      <Button
          title="Kirim Komentar"
          onPress={() => this.props.navigation.navigate('Add')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  commentBox: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    margin: 4,
    borderColor: "grey",
    backgroundColor: "white"
  },
  headerBox: {
    fontSize: 20,
    color: "brown"
  }
});
