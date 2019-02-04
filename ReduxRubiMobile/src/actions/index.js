const API_URL = 'http://localhost:3001/api/'

// start load comment data
export const loadCommentSuccess = (comments) => ({
  type: 'LOAD_COMMENT_SUCCESS',
  comments
})

export const loadCommentFailure = () => ({
  type: 'LOAD_COMMENT_FAILURE'
})

export const loadComment = () => {

  return dispatch => {
    return fetch(`${API_URL}comments`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(loadCommentSuccess(responseJson))
    })
    .catch((error) => {
      console.error(error);
      dispatch(loadCommentFailure())
    });
  }
}

// end load comment data

// start post comment data

export const postCommentSuccess = (comments) => ({
  type: 'POST_COMMENT_SUCCESS',
  comments
})

export const postCommentFailure = (id) => ({
  type: 'POST_COMMENT_FAILURE', id
})

const postCommentRedux = (id, author, message) => ({
  type: 'POST_COMMENT', id, author, message
})


export const postComment = (author, message) => {
  let id = Date.now();
  return dispatch => {
    dispatch(postCommentRedux(id, author, message))
    return fetch(`${API_URL}comments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, author, message})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(postCommentSuccess(responseJson))
    })
    .catch((error) => {
      console.error(error);
      dispatch(postCommentFailure(id))
    });
  }
}

// start delete comment data

const deleteCommentRedux = (id) => ({
  type: 'DELETE_COMMENT', id
})

export const deleteCommentSuccess = (comments) => ({
  type: 'DELETE_COMMENT_SUCCESS',
  comments
})

export const deleteCommentFailure = () => ({
  type: 'DELETE_COMMENT_FAILURE'
})


export const deleteComment = (id) => {
  return dispatch => {
    dispatch(deleteCommentRedux(id))
    return fetch(`${API_URL}comments/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(deleteCommentSuccess(responseJson))
    })
    .catch((error) => {
      console.error(error);
      dispatch(deleteCommentFailure())
    });
  }
}

// end delete comment data

export const resendComment = (id, author, message) => {
  return dispatch => {
    return fetch(`${API_URL}comments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, author, message})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(postCommentSuccess(responseJson))
    })
    .catch((error) => {
      console.error(error);
      dispatch(postCommentFailure(id))
    });
  }
}
