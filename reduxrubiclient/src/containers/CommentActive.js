import { connect } from 'react-redux'
import { deleteComment, resendComment } from '../actions'
import Comment from '../components/Comment'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteComment(ownProps.id)),
  resend: () => dispatch(resendComment(ownProps.id, ownProps.author, ownProps.message))
})

export default connect(
  null,
  mapDispatchToProps
)(Comment)
