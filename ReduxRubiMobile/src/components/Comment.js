import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const Comment = (props) => {
  return(
    <View styles={styles.item}>
      <Text style={styles.authorHeader}>{props.author}</Text>
      <Text style={styles.message}>{props.message}</Text>
      {!props.sent &&
        <Text style={styles.networkError}>
          network failed, please check your connections
        </Text>
      }
      <Button onPress={props.sent ? props.onDelete : props.resend} title={props.sent ? 'Hapus' : 'Kirim Ulang'} />
    </View>
  )
}

const styles = StyleSheet.create({
  networkError: {
    color: "red",
    fontSize: 8
  },
  authorHeader: {
    color: "green",
    fontSize: 12
  },
  message: {
    fontSize: 10
  },
  item: {
    padding: 10,
    height: 44,
  }
});

export default Comment;
