import React, { Component } from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

export default class App extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  render() {
    return (
      <div className="container">
        <h1>This is Post</h1>
        <PostForm />
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} content={post.body} />
        ))}
      </div>
    );
  }
}
