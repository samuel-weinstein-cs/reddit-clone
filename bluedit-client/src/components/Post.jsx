import React, {Component} from 'react';
import {getPost, getComments, postComment} from '../services/api_helper'
import {Link} from 'react-router-dom'
import Comment from './Comment'

export default class Post extends Component{
  constructor(props){
    super(props);

    this.state={
      post: null,
      comments: {
        rootComments:[],
        commentsObject:{}
      },
      commentText: ""
    }
  }

  async componentDidMount(){
    const post = await getPost(this.props.id);
    let comments = await getComments(this.props.id)
    const rootComments = this.commentsCalc(comments);

    this.setState({
      post,
      comments:rootComments
    })
  }

  commentsCalc = (comments) => { // O(n)
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
        //ok i just tested this and it worked basically first try wtf
      }
    })
    return {rootComments,commentsObject};
  }
  // commentsSort = (comments) => {
  //
  // }

  handleChange = (e) => {
    this.setState({commentText:e.target.value});
  }

  handleCommentSubmit = async (text, parent=null)=>{
    const comment = await postComment(this.state.post.id,{text, comments_id: parent});
    const newComment = {
      comment,
      children: []
    }
    const commentsObjectCopy=JSON.parse(JSON.stringify(this.state.comments.commentsObject));//make deep copy of object, probably quite inefficient
    console.log(commentsObjectCopy);
    let commentsArray=Object.values(commentsObjectCopy).map((commentWithChildren)=>{
      return commentWithChildren.comment;
    })
    let commentsCopy=this.commentsCalc(commentsArray)//re-calculate root comments from object list :) fml
    console.log(commentsCopy);
    commentsCopy.commentsObject[comment.id]=newComment;
    if (parent){
      commentsCopy.commentsObject[comment.comments_id].children.push(newComment)
    } else {
      commentsCopy.rootComments.push(newComment)
    }
    this.setState({
      commentText:"",
      comments:commentsCopy
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
          <form onSubmit={(e)=>{
              e.preventDefault();
              this.handleCommentSubmit(this.state.commentText);
            }}>
            <textarea value={this.state.commentText} onChange={this.handleChange}/><br />
            <input type="submit" value="Post Comment" />
          </form>
          {console.log(this.state.comments)}
          {this.state.comments.rootComments.length?
            this.state.comments.rootComments.map((comment, key)=>(
              <Comment key={key} comment={comment} onSubmit={this.handleCommentSubmit}/>
            )):
            <p>no comments</p>
          }
        </div>
      </div>

    )
  }

}
