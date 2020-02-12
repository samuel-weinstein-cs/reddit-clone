import React from 'react';
import {Link} from 'react-router-dom'

function PostPreview(props){
  return(
    <Link to={`/posts/${props.post.id}`}>
      <div className="post-preview">
        <div className="post-preview-left">
          <img src={props.post.image_url} alt=""/><br />
          <Link className="username" to="/">u/{props.post.user.username}</Link>
        </div>

        <div>
          <h2>{props.post.title}</h2>
          <p>{props.post.text}</p>
        </div>
      </div>
    </Link>
  )
}
export default PostPreview;
