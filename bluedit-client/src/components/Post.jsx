import React, {Component} from 'react';
import {getPost, getComments} from '../services/api_helper'
import {Link} from 'react-router-dom'

export default class Post extends Component{
  constructor(props){
    super(props);

    this.state={
      post: null,
      comments: []
    }
  }

  async componentDidMount(){
    const post = await getPost(this.props.id);
    const comments = await getComments(this.props.id)
    this.setState({
      post,
      comments
    })
  }

  render(){
    return(
      <div>
        {this.state.post?
          <div className="post">
            <h2>{this.state.post.title}</h2>
            <Link className="username" to="/">u/{this.state.post.user.username}</Link><br />
            <img src={this.state.post.image_url} alt=""/><br />
            <p>{this.state.post.text}</p>
          </div>:
          <h2>Loading...</h2>
        }
        <div className="post-comments">
          <h3>Comments</h3>
          {this.state.comments.length?
            this.state.comments.map((comment)=>(
              <div>{comment.text}</div>
            )):
            <p>no comments</p>
          }
        </div>
      </div>

    )
  }

}
