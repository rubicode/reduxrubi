import React from 'react';

const Comment = (props) => {
  return(
    <li>
      <h4>{props.author}</h4>
      <p>{props.message}</p>
      {!props.sent &&
        <p style={{color: "red", fontSize: "8px"}}>
          network failed, please check your connections
        </p>
      }
      <button type="button" onClick={props.sent ? props.onDelete : props.resend}>{props.sent ? 'Hapus' : 'Kirim Ulang'}</button>
    </li>
  )
}

export default Comment;
