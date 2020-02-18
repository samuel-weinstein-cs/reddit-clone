import React, {Component} from 'react';
import './App.css';
import {Route,Switch,Link,withRouter} from 'react-router-dom'

import {loginUser} from './services/api_helper'

import Post from './components/Post'
import Login from './components/Login'
import PostList from './components/PostList'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      user:null
    }
  }



  handleLogin = async (loginData) => {
    const user = await loginUser(loginData);
    this.setState({ user });
    this.props.history.push("/");
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><h1><span className="blue">Blue</span>dit</h1></Link>
          {this.state.user?
            <Link to="/">Welcome, {this.state.user.username}</Link>
            :
            <Link to="/login">Login</Link>
          }
        </header>
        <Switch>
          <Route path='/posts/:id' render={(props)=>(
              <Post id={props.match.params.id} />
            )} />
          <Route path='/login' render={() => (
              <Login handleLogin={this.handleLogin}/>
            )} />
          <Route path='/' render={() => (
              <PostList />
            )}/>
        </Switch>

      </div>
    );
  }

}

export default withRouter(App);
