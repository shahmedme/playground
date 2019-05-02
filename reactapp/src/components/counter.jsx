import React from "react";

class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="my-4">
        <button type="button" className={this.bar()}>
          Notifications{" "}
          <span className="badge badge-light">{this.props.value}</span>
        </button>
        <div className="btn-group ml-1">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.onDec(this.props.id);
            }}
          >
            -
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.onInc(this.props.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }

  bar() {
    let name = "btn btn-";

    return (name +=
      this.props.value < 0
        ? "warning"
        : this.props.value == 0
        ? "dark"
        : this.props.value >= 5
        ? "primary"
        : "info");
  }
}

export default Counter;
