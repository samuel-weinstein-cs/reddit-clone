import React, {Component} from 'react';
export default class Login extends Component{
  constructor(props){
    super(props);

    this.state={
      email:"",
      password:""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]:value});
  }

  render(){
    return(
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
        }}>
        <label htmlFor="email">Email:</label>
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type="email"
          name="email"
          />
        <label htmlFor="password">Password:</label>
        <input
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
          name="password"
          />
        <input type="submit" value="Login" />
      </form>
    )
  }
}
