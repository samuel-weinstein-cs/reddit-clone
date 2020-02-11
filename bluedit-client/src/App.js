import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import PostPreview from './components/PostPreview'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      posts:null
    }
  }

  async componentDidMount(){
    const posts = (await axios.get("http://localhost:3000/posts")).data;
    this.setState({posts})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1><span className="blue">Blue</span>dit</h1>
          {this.state.posts&&this.state.posts.map(post => (
            <PostPreview key={post.id} post={post}/>
          ))}

        </header>
      </div>
    );
  }

}

export default App;
