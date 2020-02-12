import React, {Component} from 'react';
import './App.css';

import {getPosts} from './services/api_helper'

import PostPreview from './components/PostPreview'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      posts:null
    }
  }

  async componentDidMount(){
    const posts = await getPosts();
    this.setState({posts})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1><span className="blue">Blue</span>dit</h1>
        </header>
        {this.state.posts&&this.state.posts.map(post => (
          <PostPreview key={post.id} post={post}/>
        ))}
      </div>
    );
  }

}

export default App;
