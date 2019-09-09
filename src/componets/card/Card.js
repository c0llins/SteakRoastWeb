import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardTag from "./CardTag";
import CardPrice from "./CardPrice";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  console.log(props.tags);
  const [resultadoApi, setResultadoApi] = useState(null);
  useEffect(() => {
    async function chamar_api() {
      const data = await axios.get("http://localhost:3000/hambuguer/view");
      setResultadoApi(data);
    }
    chamar_api();
  });

  return (
    <div class="card">
      <CardImage imgLink={props.imgLink} imgAlt={props.imgAlt}></CardImage>

      <div class="card-content">
        <CardTitle name={props.name} />
        <div class="content">
          <div class="tags are-medium">
            {props.tags.map(tag => (
              <CardTag name={tag}></CardTag>
            ))}
          </div>
          <CardPrice price={props.price} />
          <a
            class="button is-medium is-fullwidth is-success"
            href={props.whatsLink}
          >
            <i class="fab fa-whatsapp" style={{ marginRight: "5px" }} />
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
