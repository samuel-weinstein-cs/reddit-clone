import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import {getPosts,loginUser} from './services/api_helper'

import PostPreview from './components/PostPreview'
import Post from './components/Post'
import Login from './components/Login'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      posts:null,
      user:null
    }
  }

  async componentDidMount(){
    const posts = await getPosts();
    this.setState({posts})
  }

  handleLogin = async (loginData) => {
    const user = await loginUser(loginData);
    // this.setState({ user });
    // this.props.history.push("/");
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
            )} />
          <Route path='/login' render={() => (
              <Login handleLogin={this.handleLogin}/>
            )} />
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
