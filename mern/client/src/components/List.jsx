import React from "react";

class List extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <p className="m-0">{this.props.todo.name}</p>
        <div className="btn-group">
          <button className="btn btn-dark">
            <i className="fas fa-edit" />
          </button>
          <button
            className="btn btn-danger"
            onClick={this.props.onDeleteClick.bind(this, this.props.todo._id)}
          >
            <i className="fas fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

export default List;
