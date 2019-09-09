import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardTag from "./CardTag";
import CardPrice from "./CardPrice";
import React from "react";

export default function Card(props) {
  return props.tags ? (
    <div className="card">
      <CardImage imgLink={props.imgLink} imgAlt={props.imgAlt}></CardImage>

      <div className="card-content">
        <CardTitle name={props.name} />
        <div className="content">
          <div className="tags are-medium">
            {props.tags.map(tag => (
              <CardTag key={String(Symbol())} name={tag}></CardTag>
            ))}
          </div>
          <CardPrice price={props.price} />
          <a
            className="button is-medium is-fullwidth is-success"
            href={props.whatsLink}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: "5px" }} />
            Pedir
          </a>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
