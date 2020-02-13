import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import {getPosts} from './services/api_helper'

import PostPreview from './components/PostPreview'
import Post from './components/Post'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      posts:null,
      user: null
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
        <Switch>
          <Route path='/posts/:id' render={(props)=>(
              <Post id={props.match.params.id} />
            )}/>
          <Route path='/' render={() => (
              this.state.posts&&this.state.posts.map(post => (
                <PostPreview key={post.id} post={post}/>
              ))
            )}/>
        </Switch>

      </div>
    );
  }

}

export default App;
