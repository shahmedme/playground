import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    obj: {
      name: "Shakil Ahmed",
      role: "Junior Developer",
      isTall: "heloo"
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    apple: {
      qty: 0,
      dsbl: "disabled"
    }
  };

  constructor() {
    super();
    console.log("constructor", this);
  }

  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello world!!</h1>
        <p style={this.styles}>{this.state.obj["isTall"]}</p>
        <i className="d-block">{this.count()}</i>
        <button className={this.classes()} onClick={this.isClicked}>
          Click Here
        </button>
        <div className="input-group">
          <label htmlFor="apple">Appleeee</label>
          <input
            type="text"
            className="d-block"
            itemID="apple"
            value={this.state.count}
          />
          <button className="btn btn-danger" onClick={this.dec}>
            -
          </button>
          <button className="btn btn-success" onClick={this.inc}>
            +
          </button>
        </div>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  dec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  classes() {
    let name = "btn btn-";
    return (name += this.state.count === 0 ? "danger" : "success");
  }

  isDisable() {
    let danger = "btn btn-danger",
      success = "btn btn-success";

    return this.state.apple.qty === 0 ? danger + " disabled" : success;
  }

  count() {
    return this.state.count === 0 ? (
      <div>
        <h1>Count Is Zero</h1>
        <p>Please try again</p>
      </div>
    ) : (
      this.state.count
    );
  }

  isClicked() {
    console.log("button is clicked");
  }
}

export default Counter;
