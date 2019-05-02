import React, { Component } from "react";
import "../sass/card.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-wrapper">
          <img src={this.props.img} alt="image" className="img-fluid" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.desc}</p>
          <a href={this.props.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
