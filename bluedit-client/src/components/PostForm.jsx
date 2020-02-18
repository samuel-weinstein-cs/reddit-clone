import React, {Component} from 'react';

export default class PostForm extends Component{
  constructor(props){
    super(props);

    this.state={
      title:null,
      image:null,
      text:null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
        <label htmlFor="image">Image URL </label>
        <input type="text" name="image" onChange={this.handleChange}/>
        <textarea name="text" onChange={this.handleChange}/>
        <input type="submit" value="Post"/>
      </form>
    )
  }
}
