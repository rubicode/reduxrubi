import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});

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
    return request.get('comments')
    .then(function (response) {
      dispatch(loadCommentSuccess(response.data))
    })
    .catch(function (error) {
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
    return request.post('comments', {id, author, message})
    .then(function (response) {
      dispatch(postCommentSuccess(response.data))
    })
    .catch(function (error) {
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
    return request.delete(`comments/${id}`)
    .then(function (response) {
      dispatch(deleteCommentSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(deleteCommentFailure())
    });
  }
}

// end delete comment data

export const resendComment = (id, author, message) => {
  return dispatch => {
    return request.post('comments', {id, author, message})
    .then(function (response) {
      dispatch(postCommentSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(postCommentFailure(id))
    });
  }
}
