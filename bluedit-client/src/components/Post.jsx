import React, {Component} from 'react';
import {getPost, getComments} from '../services/api_helper'
import {Link} from 'react-router-dom'
import Comment from './Comment'

export default class Post extends Component{
  constructor(props){
    super(props);

    this.state={
      post: null,
      comments: []
    }
  }

  async componentDidMount(){
    const post = await getPost(this.props.id);
    let comments = await getComments(this.props.id)
    let commentsObject = {} //create an empty object to hold all comments
    let rootComments = [] // create an empty array to hold all comments that are not replies to other comments
    comments.forEach(comment => { //loop over each comment in comments array
      const newComment = {
        comment,
        children: []
      }
      commentsObject[comment.id]=newComment
      if(!comment.comments_id){//if comment is a root comment
        rootComments.push(newComment)
      } else {//if comment has a parent,
        //read comments_id, which is the parent comment id. this commment
        // *should* already exist in commentsObject because of the way the database works,
        //incrementing keys. a reply comment should never be created before the parent
        //in theory :)
        commentsObject[comment.comments_id].children.push(newComment)
        //ok i just tested this and it worked basically first try wtf im a genius (j/k)
      }
    })
    console.log(commentsObject);
    console.log(rootComments);
    this.setState({
      post,
      comments:rootComments
    })
  }

  render(){
    return(
      <div>
        {this.state.post?
          <div className="post">
            <h2>{this.state.post.title}</h2>
            <Link className="username" to="/">u/{this.state.post.user.username}</Link><br />
            <img src={this.state.post.image_url} alt=""/><br />
            <p>{this.state.post.text}</p>
          </div>:
          <h2>Loading...</h2>
        }
        <div className="post-comments">
          <h3>Comments</h3>
          {this.state.comments.length?
            this.state.comments.map((comment, key)=>(
              <Comment key={key} comment={comment}/>
            )):
            <p>no comments</p>
          }
        </div>
      </div>

    )
  }

}
