import React, {Component} from 'react';
import {newPost} from '../services/api_helper';

export default class PostForm extends Component{
  constructor(props){
    super(props);

    this.state={
      title:"",
      image_url:"",
      text:""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    newPost(this.state);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]:value});
  }

  render(){
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Post Title </label>
        <input type="text" name="title" onChange={this.handleChange}/>
        <label htmlFor="image_url">Image URL </label>
        <input type="text" name="image_url" onChange={this.handleChange}/>
        <textarea name="text" onChange={this.handleChange}/>
        <input type="submit" value="Post"/>
      </form>
    )
  }
}
