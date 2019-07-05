import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class Lists extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-3">
            <ul className="p-0">
              {this.props.item.todos.map(todo => (
                <List
                  key={todo._id}
                  todo={todo}
                  onDeleteClick={id => {
                    this.onDeleteClick(id);
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// List.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  item: state.wola
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Lists);
