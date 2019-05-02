import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  inc = counterId => {
    const index = this.state.counters.findIndex(item => item.id === counterId),
      cntrs = this.state.counters;
    cntrs[index].value += 1;
    this.setState({
      counters: cntrs
    });
  };

  dec = counterId => {
    const index = this.state.counters.findIndex(item => item.id === counterId),
      cntrs = this.state.counters;
    cntrs[index].value -= 1;
    this.setState({
      counters: cntrs
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              value={counter.value}
              className="target"
              id={counter.id}
              onDec={this.dec}
              onInc={this.inc}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
