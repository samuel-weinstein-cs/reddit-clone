import React, {Component} from 'react';
import {getPost} from '../services/api_helper'
import {Link} from 'react-router-dom'

export default class Post extends Component{
  constructor(props){
    super(props);

    this.state={
      post: null
    }
  }

  async componentDidMount(){
    const post = await getPost(this.props.id);
    this.setState({post})
  }

  render(){
    return(
      this.state.post?<div className="post">
        <h2>{this.state.post.title}</h2>
        <Link className="username" to="/">u/{this.state.post.user.username}</Link><br />
        <img src={this.state.post.image_url} alt=""/><br />
        <p>{this.state.post.text}</p>
      </div>:
      <h2>Loading...</h2>
    )
  }

}
