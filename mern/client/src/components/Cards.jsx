import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  state = {
    cards: [
      {
        img: "https://www.cartrack.co.za/sites/default/files/car.jpg",
        title: "Card Title 1",
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        url: "https://getbootstrap.com/docs/4.3/components/card/"
      },
      {
        img: "https://img.s-msn.com/tenant/amp/entityid/AA2RpX3.img",
        title: "Card Title 2",
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        url: "https://getbootstrap.com/docs/4.3/components/card/"
      },
      {
        img:
          "https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Swift/1548404209574/047.jpg",
        title: "Card Title 3",
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        url: "https://getbootstrap.com/docs/4.3/components/card/"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-5">
            {this.state.cards.map(card => (
              <div className="col-md-4">
                <Card
                  img={card.img}
                  title={card.title}
                  desc={card.desc}
                  url={card.url}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
