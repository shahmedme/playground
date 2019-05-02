import React, { Component } from "react";

export default class PostForm extends Component {
  state = {
    title: "",
    content: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      content: this.state.content
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control"
            value={this.state.title}
            placeholder="Title"
            onChange={this.onChange}
          />
          <textarea
            name="content"
            cols="30"
            rows="5"
            className="form-control"
            value={this.state.content}
            placeholder="Content"
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    );
  }
}
