import React, { Component } from "react";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardTag from "./CardTag";
import CardPrice from "./CardPrice";

class Card extends Component {
  render() {
    const tags = this.props.tags.map(function(tags) {
      return <CardTag name={tags}></CardTag>;
    });

    return (
      <div class="card">
        <CardImage
          imgLink={this.props.imgLink}
          imgAlt={this.props.imgAlt}
        ></CardImage>
        <div class="card-content">
          <CardTitle name={this.props.name}></CardTitle>
          <div class="content">
            <div class="tags are-medium">{tags}</div>
            <CardPrice price={12.2}></CardPrice>
            <a
              class="button is-medium is-fullwidth is-success"
              href={this.props.whatsLink}
            >
              <i class="fab fa-whatsapp" style={{ marginRight: "5px" }}></i>
              Pedir
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
