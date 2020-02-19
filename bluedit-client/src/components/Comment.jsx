import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Comment extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="comment">
        <Link className="username" to="/">u/{this.props.comment.comment.user.username}</Link><br />
        <p>{this.props.comment.comment.text}</p>
        {this.props.comment.children.length!==0&&
          <div className="comment-replies">
            {this.props.comment.children.map((child,key)=>(
              <Comment key={key} comment={child} />
            ))}
          </div>
        }
      </div>
    )
  }

}

export default Comment;
