import React from 'react';
import {Link} from 'react-router-dom';

function Comment(props){
  return(

    <div className="comment">
      <Link className="username" to="/">u/{props.comment.comment.user.username}</Link><br />
      <p>{props.comment.comment.text}</p>
      {props.comment.children.length!==0&&
        <div className="comment-replies">
          {props.comment.children.map((child,key)=>(
            <Comment key={key} comment={child} />
          ))}
        </div>
      }
    </div>

  )
}

export default Comment;