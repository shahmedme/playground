import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onTyping = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.title
    };

    this.props.addItem(newItem);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-3">
            <form action="" className="mb-3" onSubmit={this.onSubmit}>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control w-75"
                  placeholder="What should do?"
                  name="title"
                  value={this.state.title}
                  onChange={this.onTyping}
                />
                <button
                  className="btn btn-success flex-grow-1 ml-1"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddTodo);
