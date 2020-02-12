import React from 'react';

function PostPreview(props){
  return(
    <div className="post-preview">
      <div className="post-preview-left">
        <img src={props.post.image_url} alt=""/><br />
        <a className="username" href="#">u/{props.post.user.username}</a>
      </div>

      <div>
        <h2>{props.post.title}</h2>
        <p>{props.post.text}</p>
      </div>

    </div>
  )
}
export default PostPreview;
