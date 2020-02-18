import React, {Component} from 'react';
import {getPosts} from '../services/api_helper'
import PostPreview from './PostPreview'

export default class PostList extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: null
    }
  }

  async componentDidMount(){
    const posts = await getPosts();
    this.setState({posts})
  }

  render(){
    return(
      <div>
        {this.state.posts&&this.state.posts.map(post => (
          <PostPreview key={post.id} post={post}/>
        ))}
      </div>

    )
  }
}
