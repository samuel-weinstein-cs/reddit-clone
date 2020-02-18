import React from 'react';

function Comment(props){
  return(

    <div className="comment">
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
