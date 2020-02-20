import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Comment extends Component{
  constructor(props){
    super(props)

    this.state={
      reply:false,
      commentText:""
    }
  }
  render(){
    console.log(this.props.comment);
    return(
      <div className="comment">
        <Link className="username" to="/">u/{this.props.comment.comment.user.username}</Link><br />
        <p>{this.props.comment.comment.text}</p>
        <button onClick={()=>{
            this.setState({reply:!this.state.reply})
          }}>
          {this.state.reply?"hide":"reply"}
        </button>
        {this.state.reply&&<form onSubmit={async (e)=>{
          e.preventDefault();
          await this.props.onSubmit(this.state.commentText,this.props.comment.comment.id);
          this.setState({
            commentText:"none",
            reply:false
          })
        }}>
          <textarea value={this.state.commentText} onChange={(e)=>{
              this.setState({
                commentText:e.target.value
              })
            }}/><br />
          <input type="submit" value="post" />
        </form>}
        {this.props.comment.children.length!==0&&
          <div className="comment-replies">
            {this.props.comment.children.map((child,key)=>(
              <Comment key={key} comment={child} onSubmit={this.props.onSubmit}/>
            ))}
          </div>
        }
      </div>
    )
  }

}

export default Comment;
